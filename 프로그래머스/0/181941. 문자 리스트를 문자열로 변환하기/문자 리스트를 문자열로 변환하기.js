function solution(arr) {
    var answer = arr.reduce((acc,index)=>acc+=index);
    return answer;
}