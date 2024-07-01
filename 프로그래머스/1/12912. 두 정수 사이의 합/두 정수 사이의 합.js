function solution(a, b) {
    var answer = 0;
    if(a<b){
        for(let i=a; i<=b; i++){
            answer += i;
        }
        return answer;
    }
    for(let i=b; i<=a; i++){
        answer += i;
    }
    return answer;
}