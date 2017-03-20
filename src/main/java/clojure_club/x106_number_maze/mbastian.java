package clojure_club.x106_number_maze;

import java.util.HashSet;
import java.util.Set;

public class mbastian {
    public static int numberMaze(int start, int goal){
        Set<Integer> s = new HashSet<>();
        s.add(start);
        int steps = 1;
        while(!s.contains(goal)){
            Set<Integer> tmp = new HashSet<>();
            for(Integer i : s){
                tmp.add(i + 2);
                tmp.add(i * 2);
                if(0 == i % 2) tmp.add(i / 2);
            }
            s.addAll(tmp);
            steps++;
        }
        return steps;
    }

    public static void main(String[] args){
        System.out.println(numberMaze(7, 43));
        System.out.println(numberMaze(9, 2));
        System.out.println(numberMaze(2, 9));
        System.out.println(numberMaze(2, 4));
        System.out.println(numberMaze(2, 2));
    }
}
