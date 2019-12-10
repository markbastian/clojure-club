{-# language OverloadedStrings #-}
{-# language BangPatterns #-}
module Main where

import Control.Applicative
import Control.Lens
import Data.Set (Set)
import qualified Data.Set as Set
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import qualified Data.List

main = do
    putStrLn "Hello World"
    print $ length $ filter hasDouble $ possibles
    print $ length $ filter good $ possibles
    
    
hasDouble :: Eq a => [a] -> Bool
hasDouble l = any (uncurry (==)) $ zip l (tail l)

good (a:b:c:ds) 
    | a == b && b /= c = True
    | a == b = good $ dropWhile (==a) ds
    | otherwise = good (b:c:ds)
good [a,b] = a == b
good _ = False
    
gen 1 c = [[c]]
gen n c = map (c:) $ foldMap (gen (n-1)) [c..'9']

possibles = takeWhile (<="676461") $ dropWhile (<"178416") $ foldMap (gen 6) ['1'..'9']