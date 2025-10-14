function solution(numbers) {
    var answer = 0;
    let numbersArr = numbers.slice("").split("");
    let n = numbersArr.length;
    let isUsed = new Array(n).fill(false);
    let set = new Set();
    
    function dfs(path){
        if(path.length > 0){
            set.add(Number(path));
        }
        
        for(let i=0; i<n; i++){
            if(!isUsed[i]){
                isUsed[i] = true;
                dfs(path + numbersArr[i]);
                isUsed[i] = false;
            }
        }
        
        
    }
    
    dfs("");
    
    function isPrime(num){
        if(num<2) return false;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i === 0) return false;
        }
        return true;
    }
    
    for(let num of set){
        if(isPrime(num)) answer++;
    }
    
    return answer;
}