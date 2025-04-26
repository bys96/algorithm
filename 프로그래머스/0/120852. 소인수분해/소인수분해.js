function solution(n) {
    var answer = [];
    var num = n;
    for(let i=2; i<n+1; i++){
        if(num%i==0){
            num = num/i;
            if(!answer.includes(i)){
                answer.push(i);
            }
            i--;
        }
    }
    return answer;
}