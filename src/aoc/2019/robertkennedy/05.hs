{-# language OverloadedStrings #-}
{-# language BangPatterns #-}
{-# language LambdaCase #-} 
-- {-# language TemplateHaskell #-}
module Main where

import Control.Lens
import Data.Function
import qualified Data.Vector as V
import qualified Data.Vector.Mutable as VM


main :: IO ()
main = do
    dat <- read . (\s -> "["++s++"]") <$> readFile "05.txt"
    print $ prob 1 dat
    print $ prob 5 dat
    
prob :: Int -> V.Vector Int -> Int
prob num = head . _outputs . last . steps num

steps :: Int -> V.Vector Int -> [State]
steps num = iterateMaybe step . State num [] 0

-- * Intcode 
data State = State 
   { _input     :: {-# unpack #-} !Int
   , _outputs   :: ![Int]
   , _nextIndex :: {-# unpack #-} !Int
   , _currVector:: !(V.Vector Int)
   } deriving (Eq,Show,Read)
   
data ParameterMode = Position | Immediate 
     deriving (Eq,Ord,Show,Enum,Bounded)

readParameterMode :: Int -> ParameterMode
readParameterMode 0 = Position
readParameterMode 1 = Immediate
readParameterMode n = error $ "Unrecognized ParameterMode: " ++ show n

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

runOp :: State -> Opcode -> Maybe State
runOp s = \case 
    Add  p1 p2 -> Just $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (a + b)
    Mult p1 p2 -> Just $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (a * b)
    Input -> Just $ s & nextIndex %~ (+2) & currVector %~ 
        let j = getVal Immediate (i+1) vec
         in writeAt j (s ^. input)
    Output p1 -> Just $ s & nextIndex %~ (+2) & outputs %~ ((getVal p1 (i+1) $ s ^. currVector):)
    JumpIfTrue p1 p2 -> Just $ s & nextIndex %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
         in if a /= 0 then const b else (+3)
    JumpIfFalse p1 p2 -> Just $ s & nextIndex %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
         in if a == 0 then const b else (+3)
    LessThan p1 p2 -> Just $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (if a < b then 1 else 0)
    Equals p1 p2 -> Just $ s & nextIndex %~ (+4) & currVector %~ 
        let a = getVal p1 (i+1) vec
            b = getVal p2 (i+2) vec
            j = getVal Immediate (i+3) vec
         in writeAt j (if a == b then 1 else 0)
    Stop  -> Nothing
    where
    i = s ^. nextIndex
    vec = s ^. currVector
    
getVal :: ParameterMode -> Int -> V.Vector Int -> Int
getVal Immediate i v = v V.! i
getVal Position i v = v V.! (v V.! i)
    
getOp :: State -> Opcode
getOp s = readOpcode $ (s ^. currVector) V.! (s ^. nextIndex)
   
step :: State -> Maybe State
step s = runOp s $ readOpcode $ (s ^. currVector) V.! (s ^. nextIndex)
    
-- * Utils    
writeAt :: Int -> a -> V.Vector a -> V.Vector a
writeAt i value = V.modify $ \vec -> VM.write vec i value

iterateMaybe :: (a -> Maybe a) -> a -> [a]
iterateMaybe f = fix $ \rec x -> x : maybe [] rec (f x)


-- * Lenses
-- :set -ddump-splices
-- makeLenses ''State

currVector :: Lens' State (V.Vector Int)
currVector f_aNEn (State x1_aNEo x2_aNEp x3_aNEq x4_aNEr)
  = (fmap (\ y1_aNEs -> (((State x1_aNEo) x2_aNEp) x3_aNEq) y1_aNEs))
      (f_aNEn x4_aNEr)
{-# INLINE currVector #-}
input :: Lens' State Int
input f_aNEt (State x1_aNEu x2_aNEv x3_aNEw x4_aNEx)
  = (fmap (\ y1_aNEy -> (((State y1_aNEy) x2_aNEv) x3_aNEw) x4_aNEx))
      (f_aNEt x1_aNEu)
{-# INLINE input #-}
nextIndex :: Lens' State Int
nextIndex f_aNEz (State x1_aNEA x2_aNEB x3_aNEC x4_aNED)
  = (fmap (\ y1_aNEE -> (((State x1_aNEA) x2_aNEB) y1_aNEE) x4_aNED))
      (f_aNEz x3_aNEC)
{-# INLINE nextIndex #-}
outputs :: Lens' State [Int]
outputs f_aNEF (State x1_aNEG x2_aNEH x3_aNEI x4_aNEJ)
  = (fmap (\ y1_aNEK -> (((State x1_aNEG) y1_aNEK) x3_aNEI) x4_aNEJ))
      (f_aNEF x2_aNEH)
{-# INLINE outputs #-}