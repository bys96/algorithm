class Solution {
    boolean solution(String s) {
        boolean answer = true;
        int count = 0;
        
        for(int i=0; i<s.length(); i++){
            char c = s.charAt(i);
            if(c == '(') count++;
            if(c == ')') count--;
            if(count < 0) {
                answer = false;
                break;
            }
        }
        
        if(count != 0) answer = false;
        
        return answer;
    }
}