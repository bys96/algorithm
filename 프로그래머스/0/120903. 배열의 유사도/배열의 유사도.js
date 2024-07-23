function solution(s1, s2) {
    var answer = 0;
    s1.forEach(item => s2.includes(item) ? answer++ : undefined);
    return answer;
}