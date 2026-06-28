class Solution {
    public double solution(int[] arr) {
        double answer = 0;
        int leng = arr.length;
        
        for(int i=0; i<leng; i++){
            answer += arr[i];
        }
        
        answer = answer/leng;
        return answer;
    }
}