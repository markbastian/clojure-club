{-# language DeriveFunctor #-}
{-# language DeriveTraversable #-}
module Main where

import Control.Applicative
import Control.Monad
import Control.Lens
import Data.Foldable
import qualified Data.List

main = do
    v <-getInput 
    print $ sum $ depths $ fromList "COM" v
    print $ p2 $ fromList "COM" v
    
p2 :: Orbits String -> Maybe Int
p2 s@(HasOrbits "SAN" _) = getDepth "YOU" s
p2 s@(HasOrbits "YOU" _) = getDepth "SAN" s
p2 s@(HasOrbits _ os) = case Data.Foldable.find (\o -> any (=="SAN") o && any (=="YOU") o) os of
    Nothing -> fmap (subtract 2) $ (+) <$> getDepth "SAN" s <*> getDepth "YOU" s
    Just o -> p2 o
    
data Orbits a = Node a | HasOrbits a [Orbits a] deriving (Eq, Show, Functor, Foldable)
zipOrbits (Node x) (Node y) = Node (x,y)
zipOrbits (HasOrbits x xs) (HasOrbits y ys) = HasOrbits (x,y) (zipWith zipOrbits xs ys)

depths :: Orbits n -> Orbits Int
depths (Node _) = Node 0
depths (HasOrbits _ o) = HasOrbits 0 $ map (fmap succ . depths) o

getDepth :: Eq n => n -> Orbits n -> Maybe Int
getDepth n s = let ts = zipOrbits s (depths s) in fmap snd $ Data.Foldable.find ((==n) . fst) ts
    
-- * Input
getInput = parseInput <$> readFile "06.txt"
parseInput = map parseLine . filter (not . null) . lines
parseLine :: String -> (String,String)
parseLine [a,b,c,')',d,e,f] = ([a,b,c],[d,e,f])

fromList :: Eq a => a -> [(a, a)] -> Orbits a
fromList name ls =
    let (a,b) = Data.List.partition ((==name) . fst) ls
     in if null a then Node name else HasOrbits name $ map ((`fromList` b) . snd) a

-- * Util
ex = "COM)B01\nB01)C01\nC01)D01\nD01)E01\nE01)F01\nB01)G01\nG01)H01\nD01)I01\nE01)J01\nJ01)K01\nK01)L01"
ex2 = "COM)B01\nB01)C01\nC01)D01\nD01)E01\nE01)F01\nB01)G01\nG01)H01\nD01)I01\nE01)J01\nJ01)K01\nK01)L01\nK01)YOU\nI01)SAN"