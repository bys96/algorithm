function solution(n, roads, sources, destination) {
    var answer = [];
    let dic = {};
    
    for(let road of roads){
        let [a,b] = road;
        dic[a] = dic[a] || [];
        dic[a].push(b);
        dic[b] = dic[b] || [];
        dic[b].push(a);
    }
    
    let dist = new Array(n+1).fill(-1);
    dist[destination] = 0;
    
    let queue = [destination]
    
    while(queue.length){
        
        let cur = queue.shift();
        for(let next of dic[cur]){
            if(dist[next] == -1){
                dist[next] = dist[cur]+1;
                queue.push(next);
            }
        }
        
    }
    
    for(let s of sources){
        answer.push(dist[s]);
    }
    return answer;
}