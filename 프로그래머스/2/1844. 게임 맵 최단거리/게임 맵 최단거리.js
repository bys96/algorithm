function solution(maps) {
    let a = maps.length;
    let b = maps[0].length;
    let arr = [[0,0,1]];
    let dx = [1,-1,0,0];
    let dy = [0,0,1,-1];
    
    while(arr.length > 0){
        let [x,y,d] = arr.shift();
        
        if(x==a-1 && y==b-1) return d;
        
        for(let i=0; i<4; i++){
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            if(nx>=0 && ny>=0 && nx<a && ny<b && maps[nx][ny] == 1){
                maps[nx][ny] = 0;
                arr.push([nx,ny,d+1]);
            }
            
        }
    }
    return -1;
}