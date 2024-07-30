function solution(rsp) {
    var answer = rsp.split("").map(val => val==2 ? 0 : val==0 ? 5 : 2).join("");
    return answer;
}