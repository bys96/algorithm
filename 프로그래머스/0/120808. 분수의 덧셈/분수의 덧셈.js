function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let a = numer1 * denom2 + numer2 * denom1;
    let b = denom1 * denom2;
    let c = Math.min(a,b);
    
    while(c>0){
       if(a%c==0 && b%c==0){
           a/=c;
           b/=c;
           break;
       }else{
           c--;
       }
    }
    
    answer.push(a,b);
    return answer;
}