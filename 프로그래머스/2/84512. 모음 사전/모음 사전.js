function solution(word) {
    var answer = 0;
    let arr = ["A","E","I","O","U"];
    let found = false;
    
    function dfs(cur) {
        if(found || cur.length > 5) return;
        if(cur.length > 0){
            answer++;
            if(cur == word) {
                found = true;
                return;
            }
        }
        
        for(let ch of arr){
            dfs(cur + ch);
        }
    }
    
    dfs("");
    return answer;
}