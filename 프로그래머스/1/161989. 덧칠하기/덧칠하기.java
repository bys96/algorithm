import java.util.*;

class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 0;
        int meter = 0;
        
        Arrays.sort(section);
        
        for(int i=0; i<section.length; i++){
            if(section[i]<=meter) continue;
            
            meter = section[i]+m-1;
            answer++;
        }
        return answer;
    }
}