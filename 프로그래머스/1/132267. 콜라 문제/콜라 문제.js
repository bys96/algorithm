function solution(a, b, n) {
    var answer = 0;

    while (n >= a) {
        var exchanged = Math.floor(n / a) * b;
        answer += exchanged;
        n = (n % a) + exchanged;
    }

    return answer;
}