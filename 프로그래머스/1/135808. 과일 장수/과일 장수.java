import java.util.*;

class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        
        Arrays.sort(score);

        for(int i=0; i<score.length/2; i++){
            int temp = score[i];
            score[i] = score[score.length-1-i];
            score[score.length-1-i] = temp;
        }
        
        for(int i=0; i<score.length; i+=m){
            if(i+m-1>=score.length){
                break;
            }
            
            answer += m*score[i+m-1];
        }

        return answer;
    }
}