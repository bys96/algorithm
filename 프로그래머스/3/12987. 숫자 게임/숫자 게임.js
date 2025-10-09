function solution(A, B) {
    var answer = 0;
    let arr = new Array(B.length).fill(0);
    
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    
    for(let i=0; i<A.length; i++){
        if(A[i]<B[0]) {
            arr[i] = B[0];
            let number = B.shift();
            answer+=1;
        }else{
            arr[i] = B[B.length-1];
            B.pop();
        }
    }
    
    return answer;
}