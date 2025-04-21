function solution(myStr) {
    var answer = [];
    answer= myStr.split(/a|b|c/).filter(val=>val.trim());
    if(answer.length==0) answer.push("EMPTY");
    return answer;
}