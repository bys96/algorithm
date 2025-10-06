function solution(queue1, queue2) {
    var answer = 0;
    let a = queue1.reduce((acc,v)=>acc+v);
    let b = queue2.reduce((acc,v)=>acc+v);
    let sum = a+b;
    
    if(sum%2 != 0) return -1;
    
    let num = sum/2;
    let q = [...queue1,...queue2];
    let n = queue1.length;
    let i = 0, j=n;
    
    while(true){
        
        if(a==num) return answer;
        if(a>num){
            a = a-q[i++];
        }else{
            a = a+q[j++];
        }
        answer++;
        
        if(answer > n*3) return -1
    }
}