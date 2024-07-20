function solution(n) {
    var answer = 0;
    for(let i=1; i<=Math.sqrt(n);i++){
        if(n%i==0){
            answer++;
        }
    }
    if(Math.sqrt(n)===Math.floor(Math.sqrt(n))){
        return ((answer*2)-1);   
    }else{
        return answer*2;
    }
    
}