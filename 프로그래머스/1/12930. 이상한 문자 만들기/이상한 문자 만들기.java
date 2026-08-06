class Solution {
    public String solution(String s) {
        String answer = "";
        int idx = 0;
        
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i)==' '){
                answer += " ";
                idx = 0;
                continue;
            }
            
            if(idx%2==0){
                answer += ("" + s.charAt(i)).toUpperCase();
            }else{
                answer += ("" + s.charAt(i)).toLowerCase();
            }
            idx++;
        }
        
        return answer;
    }
}