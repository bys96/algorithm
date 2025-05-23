function solution(board) {
    var answer = 0;
    let xy = [-1,0,1];
    let arr = [];
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j] == 1){
                arr.push([i,j]);
            }
        }
    }
    
    for(let [a,b] of arr){
        for(x of xy){
            for(y of xy){
                if(a-x >=0 && b-y >=0 &&
                   a-x <board.length && b-y < board.length &&
                   board[a-x][b-y] == 0)
                {
                    board[a-x][b-y] = 2;
                }
            }
        }
        
    }

    return board.reduce((acc,v) => acc += v.filter(val => val == 0).length ,0);
}