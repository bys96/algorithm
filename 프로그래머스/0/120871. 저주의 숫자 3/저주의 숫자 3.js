function solution(n) {
    var answer = 0;
    let count = 0;
    while(count < n){
        answer++;
        if(answer%3 !== 0 && !String(answer).split("").includes("3")){
            count++;
        }
    }
        
    return answer;
}