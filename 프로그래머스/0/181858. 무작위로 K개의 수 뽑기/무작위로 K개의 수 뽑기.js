function solution(arr, k) {
    var answer = [];
    
    for(let val of arr){
        if(!answer.includes(val) && answer.length < k){
            answer.push(val);
        }
        if(answer.length === k) break;
    }
    
    while(answer.length < k ){
        answer.push(-1);
    }
    
    return answer;
}