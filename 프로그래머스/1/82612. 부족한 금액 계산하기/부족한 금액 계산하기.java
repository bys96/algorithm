class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0;
        long m = money;
        
        for(int i=1; i<=count; i++){
            m -= price*i;
        }

        if(m < 0) answer = 0 - m;
        return answer;
    }
}