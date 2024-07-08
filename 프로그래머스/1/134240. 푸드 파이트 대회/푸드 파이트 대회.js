function solution(food) {
    var answer = '';
    var str = '';
    for(let i=0; i<food.length; i++){
        str += String(i).repeat(Math.floor(food[i]/2));
    }
    answer += str + "0" + str.split("").reverse().join("");
    return answer;
}