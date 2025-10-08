function solution(sticker) {
    var answer = 0;
    let n = sticker.length;
    if(n == 1) return sticker[0];
    if(n == 2) return Math.max(sticker[0],sticker[1]);
    let dp = new Array(n-1).fill(0);
    
    let case1 = [0,n-2];
    let case2 = [1,n-1];
    
    function getMax([start,end]) {
        dp[0] = sticker[start];
        dp[1] = Math.max(sticker[start],sticker[start+1]);
        for(let i=2; i< dp.length; i++){
            dp[i] = Math.max(dp[i-1],dp[i-2]+sticker[start+i]);
        }
        return dp[dp.length-1];
    }
    
    answer = Math.max(getMax(case1),getMax(case2));

    return answer;
}