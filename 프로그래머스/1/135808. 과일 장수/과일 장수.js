function solution(k, m, score) {
    var answer = 0;
    var minxvalue = 0;
    score.sort((a,b)=>b-a);
    for(let i=0; i<score.length; i+=m){
        if(i+m > score.length){
            break;
        }
        minvalue = 0;
        minvalue =Math.min(...score.slice(i,i+m));
        answer += minvalue*m
    }
    return answer;
}