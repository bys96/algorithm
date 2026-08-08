import java.util.Map;

class Solution {
    public int solution(String s) {
        int answer = 0;
        String result = "";
        String word = "";
        
        Map<String, Integer> numbers = Map.of(
            "zero", 0,
            "one", 1,
            "two", 2,
            "three", 3,
            "four", 4,
            "five", 5,
            "six", 6,
            "seven", 7,
            "eight", 8,
            "nine", 9
        );
        
        for(int i=0; i<s.length(); i++){
            char c = s.charAt(i);
            
            if('0'<= c && c <= '9'){
                result += "" + c;
            }else{
                word += "" + c;
                
                if(numbers.containsKey(word)){
                    result += "" + numbers.get(word);;
                    word = "";
                }
            }
            
        }
        
        answer = Integer.parseInt(result);
        
        return answer;
    }
}