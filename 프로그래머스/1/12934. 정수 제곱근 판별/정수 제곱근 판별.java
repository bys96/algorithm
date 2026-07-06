class Solution {
    public long solution(long n) {
        long answer = 0;
        
        double a = Math.sqrt(n);
        double b = Math.floor(a);
        
        if(a==b){
            answer = (long)((a+1)*(a+1));
        }else{
            answer = -1;
        }
        return answer;
    }
}