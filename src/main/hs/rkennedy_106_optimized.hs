{-# LANGUAGE BangPatterns #-}
module Main where
import Data.Time
import System.IO
import Data.IntSet (IntSet)
import qualified Data.IntSet as Set

main :: IO ()
main = do
    hSetBuffering stdout NoBuffering
    a <- putStr "a: " >> getLine >>= readIO
    b <- putStr "b: " >> getLine >>= readIO
    timemain $ print $ directAnswer possibleNext a b

-- * Configs
possibleNext :: Int -> IntSet
possibleNext x | even x    = Set.fromList [x + 2, x * 2, x `div` 2]
               | otherwise = Set.fromList [x + 2, x * 2]
               
-- Fold
directAnswer :: (Int -> IntSet) -> Int -> Int -> Int
directAnswer f seed desire = go 1 (PathFold (Set.singleton seed) (Set.singleton seed))
    where go !n pf | desire `Set.member` current pf = n
                   | otherwise = go (n + 1) (pathsFold f pf)

data PathFold = PathFold { visited :: !IntSet, current :: !IntSet }
                           
pathsFold :: (Int -> IntSet) -> PathFold -> PathFold
-- ^ assumes current is subset of v
pathsFold f (PathFold v c) = let next = Set.foldr' (\n -> Set.union (f n)) Set.empty c 
                              in PathFold ( v `Set.union` next ) ( next `Set.difference` v )
                              
-- * Timing
timemain :: IO () -> IO ()
timemain action = do
  t0 <- getCurrentTime
  action
  t1 <- getCurrentTime
  putStrLn $ unwords ["Time taken (s):", show (t1 `diffUTCTime` t0)]
