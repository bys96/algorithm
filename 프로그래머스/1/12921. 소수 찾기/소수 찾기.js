function solution(n) {
    var answer = 0;
    let array = new Array(n+1).fill(true);
    array[0] = false;
    array[1] = false;
    
    for(let i=2; i< Math.sqrt(n); i++){
        if(array[i]===true){
            for(let j=i**2; j<=n; j+=i){
                array[j]=false;
            }
        }
    }
    
    for(let i=2; i<=n; i++){
        if(array[i]){
            answer++;
        }
    }
    
    return answer;
}