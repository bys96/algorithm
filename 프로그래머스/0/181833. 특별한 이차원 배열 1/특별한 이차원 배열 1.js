function solution(n) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        var array =[];
        for(let j=0; j<n; j++){
            if(i==j){
                array.push(1);
            }else{
            array.push(0);
            }
        }
        answer.push(array);
    }
    return answer;
}