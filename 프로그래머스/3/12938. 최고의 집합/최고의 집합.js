function solution(n, s) {
    var answer = [];
    let num = s%n;
    
    if(s<n) return [-1];
    
    for(let i=0; i<n; i++){
        answer.push(Math.floor(s/n));
    }
    for(let j=answer.length-1; j>=0; j--){
        if(num == 0) break;
        answer[j] += 1;
        num -=1;
    }
    
    return answer;
}