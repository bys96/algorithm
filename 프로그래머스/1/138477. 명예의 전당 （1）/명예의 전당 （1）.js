function solution(k, score) {
    var answer = [];
    var array = [];
    
    for(let i=0; i<k; i++){
        if(i==score.length){
            return answer;
        }
         array = score.slice(0,i+1);
        array.sort((a,b)=>a-b);
        answer.push(array[0]);
    }
    
    for(let day=k; day<score.length; day++){
            array.sort((a,b)=> a-b);
            if(array[0] < score[day]){
            array[0] =score[day];
                array.sort((a,b)=> a-b);
                answer.push(array[0]);
            }else{
            answer.push(array[0]);
            }
    }
    
    return answer;
}