class Solution {
    public int[] solution(int n) {
        int count;
        if(n%2==0){
            count = n/2;
        }else{
            count = n/2 + 1;
        }
        int[] answer = new int[count];
        int idx = 0;
        
        for(int i=0; i<=n; i++){
            if(i%2==1){
                answer[idx++] = i;
            }
        }
        
        return answer;
    }
}