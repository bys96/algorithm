function solution(dirs) {
    var answer = 0;
    let queue = [[0,0]];
    let set = new Set();
    
    for(let i=0; i<dirs.length; i++){
        let [x,y] = queue.shift();
        let [a,b] = [x,y];
        
        if(dirs[i]=="U" && y<5) y+=1;
        else if(dirs[i]=="D" && y>-5) y-=1;
        else if(dirs[i]=="L" && x>-5) x-=1;
        else if(dirs[i]=="R" && x<5) x+=1;
        
        queue.push([x,y]);
        if(a==x && b==y){
            continue;
        }else{
            set.add([[a,b],[x,y]].sort().toString());
        }
    }
    
    answer = set.size;
    return answer;
}