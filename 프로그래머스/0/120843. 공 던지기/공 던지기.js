function solution(numbers, k) {
    var answer = 0;
    num = 2*k - 2
    while(num > numbers.length-1){
    if(num > numbers.length-1){
        num = num - numbers.length;
    }
    }
    answer = numbers[num];
    return answer;
}