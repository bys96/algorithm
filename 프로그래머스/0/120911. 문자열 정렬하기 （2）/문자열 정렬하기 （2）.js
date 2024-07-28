function solution(my_string) {
    var answer = my_string.split("").map(item => item.toLowerCase()).sort().join("");
    return answer;
}