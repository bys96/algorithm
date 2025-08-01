function solution(brown, yellow) {
    var answer = [];
    
    for(let i=1; i<=Math.sqrt(yellow); i++){
        if(yellow%i != 0) continue;
        
        let h = i;
        let w = yellow/i;
        
        if(((w+2)*(h+2)-yellow) == brown){
            answer.push(w+2);
            answer.push(h+2);
            break;
        }
    }
    return answer;
}