function solution(dots) {
    let fun = (a,b) => (dots[a-1][0] - dots[b-1][0]) / (dots[a-1][1] - dots[b-1][1])
    
    if(fun(1,2) == fun(3,4) || fun(1,3) == fun(2,4) || fun(1,4) == fun(2,3)){
        return 1;
    }
    return 0;
}