function solution(n) {
    var answer = 0;
    if(Math.sqrt(n)==Math.floor(Math.sqrt(n))){
        answer=1;
    }else{
        answer=2;
    }
    return answer;
}