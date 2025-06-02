function solution(board, moves) {
    let basket = [];
    let answer = 0;
    
    for(let j=0; j<moves.length; j++){
        for(let i=0; i<board.length; i++){
            if(board[i][moves[j]-1] !== 0){
                basket.push(board[i][moves[j]-1]);
                board[i][moves[j]-1] = 0;
                break;
            }
        }
        while(basket[basket.length-1] == basket[basket.length-2] && basket.length >= 2){
            basket.splice(-2);
            answer += 2;
        }
    }
    return answer;
}