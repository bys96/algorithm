function solution(progresses, speeds) {
    var answer = [];
    
    while(progresses.length > 0){
        
        for(let j=0; j<progresses.length; j++){
            progresses[j] += speeds[j];
        }
        let count = 0;
        while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            count++;
        }
        if(count != 0) answer.push(count);
    
    }
    return answer;
}