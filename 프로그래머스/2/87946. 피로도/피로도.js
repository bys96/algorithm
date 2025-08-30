function solution(k, dungeons) {
    var answer = -1;
    let arr = new Array(dungeons.length).fill(false);
    
    function dfs(remain,count){
        answer = Math.max(answer,count);
        
        for(let i=0; i<dungeons.length; i++){
            let [need,use] = dungeons[i];
            if(remain>=need && !arr[i]){
                arr[i] = true;
                dfs(remain-use,count+1);
                arr[i] = false;
            }
        }
    }
    
    dfs(k,0);
    
    return answer;
}