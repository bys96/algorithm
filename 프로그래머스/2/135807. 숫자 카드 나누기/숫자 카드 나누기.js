function solution(arrayA, arrayB) {
    var answer = 0;
    let A=arrayA[0], B=arrayB[0];
    let isA = true, isB = true;
    
    function gcd(a,b){
        while(b!==0){
            [a,b] = [b,a%b]
        }
        return a;
    }
    
    for(let i=1; i<arrayA.length; i++){
        A=gcd(A,arrayA[i]);
        B=gcd(B,arrayB[i]);
    }
    
    for(let i=0; i<arrayA.length; i++){
        if(arrayB[i]%A == 0){
            isA = false;
            break;
        }
    }
    for(let i=0; i<arrayB.length; i++){
        if(arrayA[i]%B == 0){
            isB = false;
            break;
        }
    }
    
    if(isA && isB) answer = Math.max(A,B);
    else if(isA && !isB) answer = A;
    else if(!isA && isB) answer = B;
    else answer = 0;
    
    return answer;
}