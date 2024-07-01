function solution(n) {
    var a = n**0.5;
    if(a == Math.floor(a)){
        return (a+1)**2 ;
    }   
    return -1;
}