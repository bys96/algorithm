function solution(m, n, puddles) {
    var answer = 0;
    let dp = Array.from({length:n+1},()=>Array(m+1).fill(0));
    for(let [a,b] of puddles){
        dp[b][a] = -1;
    }
    
    dp[1][1] = 1;
    
    for(let y=1; y<=n; y++){
        for(let x=1; x<=m; x++){
            
            if(dp[y][x] === -1) continue;
            
            if(y>1 && dp[y-1][x] !== -1){
                dp[y][x] += dp[y-1][x];
            }
            if(x>1 && dp[y][x-1] !== -1){
                dp[y][x] += dp[y][x-1];
            }
            
            dp[y][x] = dp[y][x]%1000000007
        }
    }
    answer = dp[n][m];
    return answer;
}