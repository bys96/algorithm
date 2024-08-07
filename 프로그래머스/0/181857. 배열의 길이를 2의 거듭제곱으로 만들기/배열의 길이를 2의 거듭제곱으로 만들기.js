function solution(arr) {
    var answer = [];
    let len = arr.length;
    let num = 1;
    while(len>num){
        num=num*2;
    }
    answer = arr.concat(new Array(num - len).fill(0));
    return answer;
}