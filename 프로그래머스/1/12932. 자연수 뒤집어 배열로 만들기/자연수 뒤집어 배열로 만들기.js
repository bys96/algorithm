function solution(n) {
    var answer = [];
    let str = String(n);
    for(let i=(str.length-1);i>-1;i -=1){
        answer.push(Number(str[i]));
    }
    return answer;
}