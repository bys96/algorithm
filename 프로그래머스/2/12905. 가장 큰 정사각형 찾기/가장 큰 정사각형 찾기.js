function solution(board) {
    let rows = board.length;
    let cols = board[0].length;
    let maxSide = 0;
    
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === 1) {
          if (i === 0 || j === 0) dp[i][j] = 1;
          else {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        }
          maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }
    
    return maxSide ** 2;
}
