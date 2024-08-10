function solution(n) {
    let number = 1;
    var answer = 0;
    while(n>=1){
        n=n/number;
        number++;
    }
    return number-2;
}