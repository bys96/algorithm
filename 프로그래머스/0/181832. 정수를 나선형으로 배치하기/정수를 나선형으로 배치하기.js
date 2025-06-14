function solution(n) {
    let answer = new Array(n).fill("").map(v => new Array(n).fill(0));
    let num = 1;
    let x = 0;
    let y = 0;
    let dir = "right"
    
    while(num <= n**2){
        answer[x][y] = num;
        num++;
        
        if(dir == "right"){
            if(y+1 < n && answer[x][y+1] === 0){
                y++;
            }else{
                dir = "down"
                x++;
            }
        }else if(dir == "down"){
            if(x+1 <n && answer[x+1][y] === 0){
                x++;
            }else{
                dir = "left";
                y--;
            }
        }else if(dir == "left"){
            if(y-1 >= 0 && answer[x][y-1] === 0){
                y--;
            }else{
                dir = "up";
                x--;
            }
        }else if(dir == "up"){
            if(x-1 >= 0 && answer[x-1][y] === 0){
                x--;
            }else{
                dir = "right";
                y++
            }
        }
    }
        
        
    return answer;
}