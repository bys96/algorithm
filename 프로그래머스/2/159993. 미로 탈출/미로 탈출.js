function solution(maps) {
    var answer = 0;
    let R = maps.length;
    let C = maps[0].length;
    let start=[], lever=[], exit=[]
    
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            if(maps[i][j] == "S") start = [i,j];
            else if(maps[i][j] == "L") lever = [i,j];
            else if(maps[i][j] == "E") exit = [i,j];
        }
    }
    
    function bfs(start,end){
        let visited = Array.from({length:R}, () => Array(C).fill(false));
        let queue = [[start[0],start[1],0]];
        visited[start[0]][start[1]] = true;
        
        let dr = [-1,1,0,0];
        let dc = [0,0,-1,1];
        
        while(queue.length){
            let [r,c,d] = queue.shift();
            if(r==end[0] && c==end[1]) return d;
            
            for(let i=0; i<4; i++){
                let nr = r+dr[i];
                let nc = c+dc[i];
                if(nr<0 || nr>=R || nc<0 || nc>=C) continue;
                if(visited[nr][nc]) continue;
                if(maps[nr][nc]=="X") continue;
                visited[nr][nc] = true;
                queue.push([nr,nc,d+1]);
            }
        }
        return -1;
    }
    
    let a = bfs(start,lever);
    let b = bfs(lever,exit);
    
    if(a == -1 || b == -1) answer = -1;
    else answer = a+b;
    
    return answer;
}