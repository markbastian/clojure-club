module Main where

import Data.Function
import qualified Data.Vector as V
import qualified Data.Vector.Mutable as VM

main = do
    input <- read . (\s -> "["++s++"]") <$> readFile "02.txt"
    print $ p1 input
    print $ p2 input
    
p1 :: V.Vector Int -> Int
p1 = run 12 2

p2 :: V.Vector Int -> Int
p2 vec = head
    [ 100*n+v
    | n <- [0..99]
    , v <- [0..99]
    , run n v vec == 19690720
    ]

run :: Int -> Int -> V.Vector Int -> Int
run noun verb = V.head . currVec . last . iterateMaybe step . State 0 . writeAt 2 verb . writeAt 1 noun

data State = State 
   { nextIndex :: {-# unpack #-} !Int
   , currVec   :: !(V.Vector Int)
   } deriving (Eq,Show)
   
-- Intcode 
step :: State -> Maybe State
step (State i v) = case v V.! i of
    1  -> Just $
        let a = v V.! (v V.! (i+1))
            b = v V.! (v V.! (i+2))
            c = v V.! (i+3)
         in State (i+4) (writeAt c (b+a) v)
    2  -> Just $
        let a = v V.! (v V.! (i+1))
            b = v V.! (v V.! (i+2))
            c = v V.! (i+3)
         in State (i+4) (writeAt c (b*a) v)
    99 -> Nothing
    val -> error $ "Unrecognized value: " ++ show val
    
    
writeAt :: Int -> a -> V.Vector a -> V.Vector a
writeAt i value = V.modify $ \vec -> VM.write vec i value

iterateMaybe :: (a -> Maybe a) -> a -> [a]
iterateMaybe f = fix $ \rec x -> x : maybe [] rec (f x)