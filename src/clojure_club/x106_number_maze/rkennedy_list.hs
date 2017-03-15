{-# LANGUAGE BangPatterns #-}
-- | Uses Lists and Integers; aka this is slow
module Main where
import Data.Time
import qualified Data.List
import System.IO

main :: IO ()
main = do
    hSetBuffering stdout NoBuffering
    a <- putStr "a: " >> getLine >>= readIO
    b <- putStr "b: " >> getLine >>= readIO
    timemain $ print $ head $ paths a b
    
               
paths :: Integer -> Integer -> [[Integer]]
paths a b = filter ((== b) . last) $ gPathsFrom possibleNext a

-- * Generic
gPathsFrom :: (a -> [a]) -> a -> [[a]]
gPathsFrom f a = [[a]] ++ mconcat (Data.List.transpose $ map (map (a:) . gPathsFrom f) (f a))

-- * Configs
halve :: Integer -> Integer
halve !n = n `div` 2
add2 :: Integer -> Integer
add2 !n = n + 2
double :: Integer -> Integer
double !n = n * 2

possibleNext :: Integer -> [Integer]
possibleNext x | even x    = [add2 x, double x, halve x]
               | otherwise = [add2 x, double x]

-- * Timing
timemain :: IO () -> IO ()
timemain action = do
  t0 <- getCurrentTime
  action
  t1 <- getCurrentTime
  putStrLn $ unwords ["Time taken (s):", show (t1 `diffUTCTime` t0)]
