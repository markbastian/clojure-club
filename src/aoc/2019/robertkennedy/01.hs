module Main where

main = do
    masses <- map read . lines <$> readFile "01.txt"
    print $ sum $ map massToFuel masses
    print $ sum $ map totalFuelReq masses

massToFuel :: Int -> Int
massToFuel n = max 0 $ n `div` 3 - 2

totalFuelReq :: Int -> Int
totalFuelReq = sum . takeWhile (>0) . tail . iterate massToFuel