class Solution {
    public int solution(int n) {
        int answer = 0;
        
        for(int i=1; i<= n; i+=1){
            int count = 0;
            for(int j=i; j<= n; j+=1){
                count += j;
                if(count == n){
                    answer +=1;
                    break;
                }else if(count > n){
                    break;
                }
            }
        }
        return answer;
    }
}