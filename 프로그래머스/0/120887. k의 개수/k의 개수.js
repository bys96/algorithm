function solution(i, j, k) {
    var answer = 0;
    
    for(let x=i; x<=j; x++){
        for(let y=0; y<String(x).length; y++){
            if(String(x)[y]==k){
                answer++;
            }
        }
    }
    return answer;
}