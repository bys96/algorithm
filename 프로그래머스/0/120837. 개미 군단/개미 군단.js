function solution(hp) {
    var answer = 0;
    var a = Math.floor(hp/5);
    var b = Math.floor((hp%5)/3);
    var c = hp-(a*5)-(b*3);
    answer = a+b+c;
    return answer;
}