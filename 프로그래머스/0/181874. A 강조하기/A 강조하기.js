function solution(myString) {
    var answer = myString.split("").map((item)=> item == 'a' || item=='A' ? item.toUpperCase() : item.toLowerCase()).join("");
    return answer;
}