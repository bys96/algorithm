function solution(age) {
    var array = ['a','b','c','d','e','f','g','h','i','j']
    age = age.toString().split("");
    var answer = age.map(item => array[item]).join("");
    return answer;
}