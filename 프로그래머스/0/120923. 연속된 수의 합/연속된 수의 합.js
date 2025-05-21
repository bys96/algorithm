function solution(num, total) {
    var answer = new Array(num).fill(Math.round(total/num));
    answer = answer.map((val,idx) => val = val + idx - Math.floor(num/2) )
    return answer;
}