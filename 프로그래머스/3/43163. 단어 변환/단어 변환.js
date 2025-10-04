function solution(begin, target, words) {
    var answer = Infinity;
    let visited = new Array(words.length).fill(false);
    words = words.map(v=>v.split(""));
    
    function dfs(word,cnt){
        if(word == target){
            answer = Math.min(answer,cnt);
            return;
        }
        
        let arr = word.split("");
        
        for(let i=0; i<words.length; i++){
            if(visited[i]) continue;
            
            let count = 0;
            for(let j=0; j<arr.length; j++){
                if(arr[j] != words[i][j]){
                    count++;
                }
            }
            
            if(count == 1){
                visited[i] = true;
                dfs(words[i].join(""),cnt+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(begin,0);
    
    return answer == Infinity ? 0 : answer;
}