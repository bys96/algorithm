class Solution {
    public int solution(String my_string) {
        int answer = 0;
        
        for(int i=0; i<my_string.length(); i++){
            char c = my_string.charAt(i);
            if((c-'0')>=0 && (c-'0')<=9){
               answer += Integer.parseInt(""+c);
            }
        }
        
        return answer;
    }
}