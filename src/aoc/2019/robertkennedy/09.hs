{-# language OverloadedStrings #-}
{-# language BangPatterns #-}
{-# language LambdaCase #-} 
{-# language TupleSections #-} 
-- {-# language TemplateHaskell #-}
module Main where

import Control.Lens
import Data.Foldable
import Data.Function
import Data.Maybe
import qualified Data.Vector as V
import qualified Data.Vector.Mutable as VM
import qualified Data.List

main :: IO ()
main = do
    dat <- read . (\s -> "["++s++"]") <$> readFile "09.txt" :: IO (V.Vector Int)
    print $ p1 dat
    print $ p2 dat
    
p1 :: V.Vector Int -> [Int]
p1 = go . runToPause . State 0 0
    where
    go = \case
        Stopped -> []
        HasOutput(o,s)->o:go (runToPause s)
        NeedsInput f -> go (runToPause $ f 1)
p2 :: V.Vector Int -> [Int]
p2 = go . runToPause . State 0 0
    where
    go = \case
        Stopped -> []
        HasOutput(o,s)->o:go (runToPause s)
        NeedsInput f -> go (runToPause $ f 2)

testInputs :: V.Vector Int -> [Int]
testInputs = go . runToPause . State 0 0
    where
    go = \case
        Stopped -> []
        HasOutput(o,s)->o:go (runToPause s)

-- * Intcode 
data State = State 
   { _nextIndex    :: {-# unpack #-} !Int
   , _relativeBase :: {-# unpack #-} !Int
   , _currVector   :: !(V.Vector Int)
   } deriving (Eq,Show,Read)
   
data ReadOrWrite = Read | Write deriving (Eq,Ord,Show,Enum,Bounded)
data ParameterMode = Position | Immediate | Relative
     deriving (Eq,Ord,Show,Enum,Bounded)

readParameterMode :: Int -> ParameterMode
readParameterMode 0 = Position
readParameterMode 1 = Immediate
readParameterMode 2 = Relative
readParameterMode n = error $ "Unrecognized ParameterMode: " ++ show n

getVal :: ReadOrWrite -> ParameterMode -> Int -> State -> Int
getVal rw pm i s = case (rw,pm) of 
    (Read ,Position ) -> v ! (v ! i)
    (Read ,Immediate) -> v ! i
    (Read ,Relative ) -> v ! ((v ! i) + _relativeBase s)
    (Write,Position ) -> v ! i
    (Write,Relative ) -> (v ! i) + _relativeBase s
    where
    v = _currVector s
    (!) :: V.Vector Int -> Int -> Int
    (!) v' i' = fromMaybe 0 $ v' V.!? i'

data Opcode =
     Add    !ParameterMode !ParameterMode !ParameterMode
   | Mult   !ParameterMode !ParameterMode !ParameterMode
   | Stop
   | Input  !ParameterMode
   | Output !ParameterMode
   | JumpIfTrue  !ParameterMode !ParameterMode 
   | JumpIfFalse !ParameterMode !ParameterMode 
   | LessThan    !ParameterMode !ParameterMode !ParameterMode
   | Equals      !ParameterMode !ParameterMode !ParameterMode
   | RelativeBaseOffset !ParameterMode
     deriving (Eq,Ord,Show)

readOpcode :: Int -> Opcode
readOpcode n = case opc of
    1  -> Add  a b c
    2  -> Mult a b c
    3  -> Input  a
    4  -> Output a
    5  -> JumpIfTrue  a b 
    6  -> JumpIfFalse a b 
    7  -> LessThan    a b c
    8  -> Equals      a b c
    9  -> RelativeBaseOffset a
    99 -> Stop
    _ -> error $ "Unrecognized Opcode: " ++ show n
    where
    (pms,opc) = n `divMod` 100
    (r ,a) = readParameterMode <$> pms `divMod` 10
    (r',b) = readParameterMode <$> r `divMod` 10
    (_ ,c) = readParameterMode <$> r' `divMod` 10

data PauseReason = 
     Stopped 
   | NeedsInput (Int -> State) 
   | HasOutput (Int,State)
   
isStopped :: PauseReason -> Bool
isStopped Stopped = True
isStopped _ = False
    
runOp :: State -> Opcode -> Either PauseReason State
runOp s = \case 
    Add  p1 p2 p3 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal Read  p1 (i+1) s
            b = getVal Read  p2 (i+2) s
            j = getVal Write p3 (i+3) s
         in writeAt j (a + b)
    Mult p1 p2 p3 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal Read  p1 (i+1) s
            b = getVal Read  p2 (i+2) s
            j = getVal Write p3 (i+3) s
         in writeAt j (a * b)
    JumpIfTrue p1 p2 -> Right $ s & nextIndex %~ 
        let a = getVal Read p1 (i+1) s
            b = getVal Read p2 (i+2) s
         in if a /= 0 then const b else (+3)
    JumpIfFalse p1 p2 -> Right $ s & nextIndex %~ 
        let a = getVal Read p1 (i+1) s
            b = getVal Read p2 (i+2) s
         in if a == 0 then const b else (+3)
    LessThan p1 p2 p3 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal Read p1 (i+1) s
            b = getVal Read p2 (i+2) s
            j = getVal Write p3 (i+3) s
         in writeAt j (if a < b then 1 else 0)
    Equals p1 p2 p3 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal Read p1 (i+1) s
            b = getVal Read p2 (i+2) s
            j = getVal Write p3 (i+3) s
         in writeAt j (if a == b then 1 else 0)
    RelativeBaseOffset p1 -> Right $ s & nextIndex %~ (+2) & relativeBase %~ (+getVal Read p1 (i+1) s)
    Input p1 -> Left $ NeedsInput $ \input -> 
                s & nextIndex %~ (+2) & currVector %~ 
                    let j = getVal Write p1 (i+1) s
                     in writeAt j input
    Output p1 -> Left $ HasOutput 
                ( getVal Read p1 (i+1) s
                , s & nextIndex %~ (+2)
                )
    Stop  -> Left Stopped
    where
    i = s ^. nextIndex
    
getOp :: State -> Opcode
getOp s = readOpcode $ (s ^. currVector) V.! (s ^. nextIndex)
   
step :: State -> Either PauseReason State
step s = runOp s $ getOp s

runToPause :: State -> PauseReason
runToPause = either id runToPause . step 
    
-- * Utils    
writeAt :: Int -> Int -> V.Vector Int -> V.Vector Int
writeAt i value initialV 
    | i < l = V.modify (\vec -> VM.write vec i value) initialV
    | value == 0 = initialV
    | i == l = initialV `V.snoc` value
    | otherwise = initialV V.++ (V.replicate (i-l) 0 `V.snoc` value)
    where
    l = V.length initialV

iterateMaybe :: (a -> Maybe a) -> a -> [a]
iterateMaybe f = fix $ \rec x -> x : maybe [] rec (f x)


-- * Lenses
-- :set -ddump-splices
-- makeLenses ''State

currVector :: Lens' State (V.Vector Int)
currVector f_aK6I (State x1_aK6J x2_aK6K x3_aK6L)
  = (fmap (\ y1_aK6M -> ((State x1_aK6J) x2_aK6K) y1_aK6M))
      (f_aK6I x3_aK6L)
{-# INLINE currVector #-}
nextIndex :: Lens' State Int
nextIndex f_aK6N (State x1_aK6O x2_aK6P x3_aK6Q)
  = (fmap (\ y1_aK6R -> ((State y1_aK6R) x2_aK6P) x3_aK6Q))
      (f_aK6N x1_aK6O)
{-# INLINE nextIndex #-}
relativeBase :: Lens' State Int
relativeBase f_aK6S (State x1_aK6T x2_aK6U x3_aK6V)
  = (fmap (\ y1_aK6W -> ((State x1_aK6T) y1_aK6W) x3_aK6V))
      (f_aK6S x2_aK6U)
{-# INLINE relativeBase #-}