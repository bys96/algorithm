function solution(my_string, overwrite_string, s) {
    var answer = '';
    let arr = my_string.split("");
    arr.splice(s,overwrite_string.length,...overwrite_string.split(""));
    answer = arr.join("");
    return answer;
}