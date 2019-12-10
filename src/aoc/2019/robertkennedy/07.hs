{-# language OverloadedStrings #-}
{-# language BangPatterns #-}
{-# language LambdaCase #-} 
{-# language TupleSections #-} 
-- {-# language TemplateHaskell #-}
module Main where

import Control.Lens
import Data.Foldable
import Data.Function
import qualified Data.Vector as V
import qualified Data.Vector.Mutable as VM
import qualified Data.List


main :: IO ()
main = do
    dat <- read . (\s -> "["++s++"]") <$> readFile "07.txt"
    print $ p1 dat
    print $ p2 dat
    
p1 :: V.Vector Int -> Int
p1 vec = maximum $ map (runP1 vec) $ Data.List.permutations [0..4]
    
runP1 :: V.Vector Int -> [Int] -> Int
runP1 v = foldl' go 0
    where
    -- go !o i = getOutput [i,o] v
    go !o i = case runToPause $ State 0 v of
        NeedsInput f -> case runToPause $ f i of
            NeedsInput f' -> case runToPause $ f' o of
                HasOutput (out,_) -> out
        
p2 :: V.Vector Int -> Int
p2 vec = maximum $ map (runP2 vec) $ Data.List.permutations [5..9]

runP2 :: V.Vector Int -> [Int] -> Int
runP2 v = go . alterHead . feedInputs . zip (replicate 5 $ runToPause $ State 0 v) . map pure
    where
    alterHead ((NeedsInput f,[]):ss) = (runToPause $ f 0,[]):ss
    
    rotate (a:ss) = ss++[a]
    feedOutput ((HasOutput(o,s),is):(b,is'):ss) = (runToPause s,is):(b,is'++[o]):ss
    feedOutput ss = ss
    
    feedInput (NeedsInput f) (i:is) = (runToPause (f i),is)
    feedInput pr ins = (pr,ins)
    
    feedOutputs = foldr (.) id $ replicate 5 (rotate.feedOutput)
    feedInputs = map $ uncurry feedInput
    
    go ss = if all (isStopped.fst) ss then head $ snd $ head ss else go $ feedInputs $ feedOutputs $ ss

-- * Intcode 
data State = State 
   { _nextIndex :: {-# unpack #-} !Int
   , _currVector:: !(V.Vector Int)
   } deriving (Eq,Show,Read)
   
data ParameterMode = Position | Immediate 
     deriving (Eq,Ord,Show,Enum,Bounded)

readParameterMode :: Int -> ParameterMode
readParameterMode 0 = Position
readParameterMode 1 = Immediate
readParameterMode n = error $ "Unrecognized ParameterMode: " ++ show n

getVal :: ParameterMode -> Int -> V.Vector Int -> Int
getVal Immediate i v = v V.! i
getVal Position i v = v V.! (v V.! i)

data Opcode =
     Add  ParameterMode ParameterMode 
   | Mult ParameterMode ParameterMode 
   | Stop
   | Input
   | Output ParameterMode
   | JumpIfTrue  ParameterMode ParameterMode
   | JumpIfFalse ParameterMode ParameterMode
   | LessThan    ParameterMode ParameterMode
   | Equals      ParameterMode ParameterMode
     deriving (Eq,Ord,Show)

readOpcode :: Int -> Opcode
readOpcode n = let (pms,opc) = n `divMod` 100 in case opc of
    1  -> let (r,a) = pms `divMod` 10; (_,b) = r `divMod` 10 in Add  (readParameterMode a) (readParameterMode b)
    2  -> let (r,a) = pms `divMod` 10; (_,b) = r `divMod` 10 in Mult (readParameterMode a) (readParameterMode b)
    3  -> Input
    4  -> let (_,a) = pms `divMod` 10 in Output (readParameterMode a)
    5  -> let (r,a) = pms `divMod` 10; (_,b) = r `divMod` 10 in JumpIfTrue  (readParameterMode a) (readParameterMode b)
    6  -> let (r,a) = pms `divMod` 10; (_,b) = r `divMod` 10 in JumpIfFalse (readParameterMode a) (readParameterMode b)
    7  -> let (r,a) = pms `divMod` 10; (_,b) = r `divMod` 10 in LessThan    (readParameterMode a) (readParameterMode b)
    8  -> let (r,a) = pms `divMod` 10; (_,b) = r `divMod` 10 in Equals      (readParameterMode a) (readParameterMode b)
    99 -> Stop
    _ -> error $ "Unrecognized Opcode: " ++ show n

data PauseReason = 
     Stopped 
   | NeedsInput (Int -> State) 
   | HasOutput (Int,State)
   
isStopped :: PauseReason -> Bool
isStopped Stopped = True
isStopped _ = False
    
runOp :: State -> Opcode -> Either PauseReason State
runOp s = \case 
    Add  p1 p2 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (a + b)
    Mult p1 p2 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (a * b)
    JumpIfTrue p1 p2 -> Right $ s & nextIndex %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
         in if a /= 0 then const b else (+3)
    JumpIfFalse p1 p2 -> Right $ s & nextIndex %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
         in if a == 0 then const b else (+3)
    LessThan p1 p2 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (if a < b then 1 else 0)
    Equals p1 p2 -> Right $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (if a == b then 1 else 0)
    Input -> Left $ NeedsInput $ \input -> 
                s & nextIndex %~ (+2) & currVector %~ 
                    let j = getVal Immediate (i+1) vec
                     in writeAt j input
    Output p1 -> Left $ HasOutput 
                ( getVal p1 (i+1) $ s ^. currVector
                , s & nextIndex %~ (+2)
                )
    Stop  -> Left Stopped
    where
    i = s ^. nextIndex
    vec = s ^. currVector
    
getOp :: State -> Opcode
getOp s = readOpcode $ (s ^. currVector) V.! (s ^. nextIndex)
   
step :: State -> Either PauseReason State
step s = runOp s $ getOp s

runToPause :: State -> PauseReason
runToPause = either id runToPause . step 
    
-- * Utils    
writeAt :: Int -> a -> V.Vector a -> V.Vector a
writeAt i value = V.modify $ \vec -> VM.write vec i value

iterateMaybe :: (a -> Maybe a) -> a -> [a]
iterateMaybe f = fix $ \rec x -> x : maybe [] rec (f x)


-- * Lenses
-- :set -ddump-splices
-- makeLenses ''State

currVector :: Lens' State (V.Vector Int)
currVector f_a1hCW (State x1_a1hCX x2_a1hCY)
  = (fmap (\ y1_a1hCZ -> (State x1_a1hCX) y1_a1hCZ))
      (f_a1hCW x2_a1hCY)
{-# INLINE currVector #-}
nextIndex :: Lens' State Int
nextIndex f_a1hD0 (State x1_a1hD1 x2_a1hD2)
  = (fmap (\ y1_a1hD3 -> (State y1_a1hD3) x2_a1hD2))
      (f_a1hD0 x1_a1hD1)
{-# INLINE nextIndex #-}