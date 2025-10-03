function solution(n, computers) {
    var answer = 0;
    let arr = new Array(n).fill(false);
    
    function dfs(x){
        arr[x] = true;
        for(let i=0; i<n; i++){
            if(computers[x][i] == 1 && !arr[i]){
                dfs(i);
            }
        }
    }
    
    for(let i=0; i<n; i++){
        if(!arr[i]){
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}