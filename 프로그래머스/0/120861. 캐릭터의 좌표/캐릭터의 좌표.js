function solution(keyinput, board) {
    var answer = [];
    let [x,y] = [0,0];
    let xlimit = Math.trunc(board[0]/2);
    let ylimit = Math.trunc(board[1]/2);
    
    for(let value of keyinput) {
        switch(value){
            case "left" :
                if(x > -xlimit) x--;
                break;
            case "right" :
                if(x < xlimit) x++;
                break;
            case "up" :
                if(y < ylimit) y++;
                break;
            case "down" :
                if(y > -ylimit) y--;
                break;
        }
    }
    
    answer = [x,y];
    
    return answer;
}