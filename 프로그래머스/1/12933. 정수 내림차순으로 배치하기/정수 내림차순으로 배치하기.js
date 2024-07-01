function solution(n) {
    var answer = 0;
    var str1 = String(n);
    var str2 = str1.split("").sort((a,b)=> b-a).join("");
    return parseInt(str2);
}