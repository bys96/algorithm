function solution(s) {
    var answer = '';
    answer = s.toLowerCase().split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(" ");
    return answer;
}