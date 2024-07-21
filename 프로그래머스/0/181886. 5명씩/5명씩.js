function solution(names) {
    var answer = [];
    answer= names.map((item,index)=> index%5==0 ? item : null).filter(item => item !== null);
    return answer;
}