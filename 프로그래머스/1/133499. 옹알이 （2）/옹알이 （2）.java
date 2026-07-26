class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] arr = {"aya","ye","woo","ma"};
        
        
        for(String s : babbling){
            
            String prev = "";
            
            for(int i=0; i<arr.length; i++){
                if(s.startsWith(arr[i]) && !prev.equals(arr[i])){
                    prev = s.substring(0,arr[i].length());
                    s = s.substring(arr[i].length());
                    i = -1;
                    continue;
                }
            }
            
            if(s.equals("")){
                answer++;
            }
        }
        
        return answer;
    }
}