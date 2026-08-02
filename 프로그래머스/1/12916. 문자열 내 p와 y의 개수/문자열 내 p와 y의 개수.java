class Solution {
    boolean solution(String s) {
        boolean answer = true;
        s = s.toLowerCase();

        int[] count = {0,0};
        
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i) == 'p'){
                count[0]++;
            }else if(s.charAt(i) == 'y'){
                count[1]++;
            }
        }
        
        answer = count[0]==count[1];
        
        return answer;
    }
}