function solution(A, B) {
    var answer = '';
    if(A==B) return 0;
    for(let i=1; i<=A.length; i++){
        answer = A.slice(-i) + A.slice(0,A.length-i);
        if(answer == B) return i
    }
    return -1;
}