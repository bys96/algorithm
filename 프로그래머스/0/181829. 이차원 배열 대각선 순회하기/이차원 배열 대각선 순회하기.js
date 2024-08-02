function solution(board, k) {
    var answer = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<=k-i; j++){
            if(j<board[0].length){
            answer += board[i][j];
            }else{
                continue;
            }
        }
    }
    return answer;
}