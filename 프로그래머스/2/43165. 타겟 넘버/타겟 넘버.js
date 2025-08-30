function solution(numbers, target) {
    var answer = 0;
    
    function dfs(sum,idx){
        
        if(numbers.length == idx){
            if (sum==target) answer++;
            return;
        }
        
        dfs(sum+numbers[idx],idx+1);
        dfs(sum-numbers[idx],idx+1);
        
    }
    
    dfs(0,0);
    return answer;
}