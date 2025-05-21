function solution(common) {
    var answer = 0;
    let [a,b,c] = common.slice(-3);
    if(b-a == c-b) answer = b-a+c;
    else if(b/a == c/b) answer = b/a*c;
    return answer;
}