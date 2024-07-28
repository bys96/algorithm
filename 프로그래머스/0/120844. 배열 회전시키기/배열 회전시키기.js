function solution(numbers, direction) {
    var answer = [];
    let a = numbers.length
    if(direction=="right"){
        answer= numbers.slice(0,a-1);
        answer.unshift(numbers[a-1])
    }else{
        answer = numbers.slice(1,a);
        answer.push(numbers[0])
    }
    return answer;
}