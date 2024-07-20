function solution(my_string) {
    var array = ["a","e","i","o","u"];
    var answer = my_string.split("").map((item)=>array.includes(item) ? "" : item).join("");
    return answer;
}