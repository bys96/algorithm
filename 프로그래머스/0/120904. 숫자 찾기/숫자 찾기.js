function solution(num, k) {
    var answer = 0;
    let array = num.toString().split("");
    for(let i=0; i<array.length; i++){
        if(array[i] == k) return i+1;
    }
    return -1;
}