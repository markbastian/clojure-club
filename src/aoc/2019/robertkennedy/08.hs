{-# language OverloadedStrings #-}
{-# language BangPatterns #-}
{-# language DeriveFunctor #-}
{-# language DeriveTraversable #-}
{-# language TransformListComp #-}
module Main where

import Control.Applicative
import Control.Monad
import Control.Lens
import Data.Char
import Data.Ord
import Data.Set (Set)
import qualified Data.Set as Set
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import qualified Data.List
import Data.Array.Unboxed as UArray
import GHC.Exts (groupWith,the)

main = do
    is <- map digitToInt . filter isDigit <$> readFile "08.txt" 
    let arr = buildArr 25 6 is
    print $ checkDigit arr
    putStrLn $ drawImage $ flatten arr
    
checkDigit :: UArray (Int,Int,Int) Int -> Maybe Int
checkDigit arr = 
    let layer = head $ Data.List.sortOn (lookup 0) $ map (count . layerElems) [t0..t1]
     in (*) <$> lookup 1 layer <*> lookup 2 layer
    where
    ((t0,h0,w0),(t1,h1,w1)) = bounds arr
    counts = count . layerElems
    layerElems t = map (\(x,y) -> arr ! (t,x,y)) $ range ((h0,w0),(h1,w1))
    

flatten :: UArray (Int,Int,Int) Int -> UArray (Int,Int) Bool
flatten arr = array ((h0,w0),(h1,w1)) $ map go $ range ((h0,w0),(h1,w1))
    where
    ((t0,h0,w0),(t1,h1,w1)) = bounds arr
    go (y,x) = ((y,x), (==1) $ head $ dropWhile (==2) $ map (\t -> arr ! (t,y,x)) [t0..t1])
    
drawImage :: UArray (Int,Int) Bool -> String
drawImage arr = unlines
    [[if arr!(y,x) then ' ' else blockChar |x <-[w0..w1]]
    |y <-[h0..h1]
    ]
    where
    ((h0,w0),(h1,w1)) = bounds arr
    
    
buildArr :: Int -> Int -> [Int] -> UArray (Int,Int,Int) Int
buildArr w h is = listArray ((1,1,1),(t,h,w)) is
    where t = length is `div` h `div` w
    
buildArrS :: Int -> Int -> String -> UArray (Int,Int,Int) Int
buildArrS w h = buildArr w h . map digitToInt . filter isDigit

count :: Ord a => [a] -> [(a,Int)]
count xs = 
    [ (the x,length x)
    | x <- xs
    , then group by x using groupWith
    ]
    
blockChar = '█'