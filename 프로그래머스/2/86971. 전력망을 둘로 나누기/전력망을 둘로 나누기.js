function solution(n, wires) {
    var answer = 101;
    let dic = {}
    for(let [a,b] of wires){
        dic[a] = dic[a] || [];
        dic[b] = dic[b] || [];
        dic[a].push(b);
        dic[b].push(a);
    }
    
    function dfs(node,a,b,visited){
        visited[node] = true;
        let count = 1;
        
        for(let next of dic[node]){
          if(!visited[next] && !((node === a && next === b) || (node === b && next === a))){
            count += dfs(next,a,b,visited);
          }
        }
        return count;
    }

    for (let [a,b] of wires) {
        let visited = Array(n+1).fill(false);
        let cnt = dfs(a,a,b,visited);
        let diff = Math.abs(n-2 * cnt);
        answer = Math.min(answer,diff);
    }

    
    return answer;
}