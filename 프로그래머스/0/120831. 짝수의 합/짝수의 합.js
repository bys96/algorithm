function solution(n) {
    sum = 0;
    for(let i = n;i>1 ;i--){
        if(i%2==0){
            sum+=i;
        }else{
            continue;
        }
    }
    return sum;
}