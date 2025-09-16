function solution(x, y, n) {
    var answer = 0;
    let queue = [[x,0]];
    let set = new Set([x]);
    let idx = 0;
    
    while(idx<queue.length){
        let [cur,count] = queue[idx++];
        
        if(cur == y) return count;
        
        for(let i of [cur+n,cur*2,cur*3]){
            if(i<=y && !set.has(i)){
            queue.push([i,count+1]);
            set.add(i);
            }
        }
    }
    return -1;
}