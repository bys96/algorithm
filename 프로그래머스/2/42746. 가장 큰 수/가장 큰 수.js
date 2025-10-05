function solution(numbers) {
    var answer = '';
    numbers = numbers.map(v => v.toString());
    numbers.sort((a,b)=>(b+a)-(a+b));
    answer = numbers.join("");
    return answer[0] == 0 ? "0" : answer;
}