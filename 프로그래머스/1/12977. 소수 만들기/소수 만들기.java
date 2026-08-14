class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int leng = nums.length;

        for(int i=0; i<leng-2; i++){
            for(int j=i+1; j<leng-1; j++){
                for(int k=j+1; k<leng; k++){
                    int num = nums[i]+nums[j]+nums[k];
                    int count = 0;
                    for(int n=1; n<=Math.sqrt(num); n++){
                        if(num%n == 0) count++;
                    }
                    if(count == 1) answer++;
                }
            }
        }

        return answer;
    }
}