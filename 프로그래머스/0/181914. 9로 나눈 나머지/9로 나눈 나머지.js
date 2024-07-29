function solution(number) {
    var answer = (number.split("").reduce((acc,val) => acc+Number(val),0))%9;
    return answer;
}