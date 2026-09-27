class Solution {
    public String solution(String my_string) {
        String answer = "";
        String vowel = "aeiou";
        
        for(int i=0; i<my_string.length(); i++){
            boolean isHas = false;
            for(int j=0; j<vowel.length(); j++){
                if(my_string.charAt(i) == vowel.charAt(j)){
                    isHas = true;
                    break;
                }
            }
            if(isHas) continue;
            answer += my_string.charAt(i);
        }
        
        return answer;
    }
}