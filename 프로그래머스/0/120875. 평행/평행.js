function solution(dots) {
    let fun = (a,b) => (dots[a][1] - dots[b][1]) / (dots[a][0] - dots[b][0])
    
    if(fun(0,1) == fun(2,3) || fun(0,2) == fun(1,3) || fun(0,3) == fun(1,2)){
        return 1;
    }
    return 0;
}