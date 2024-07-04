function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    var arr = d.sort((a,b)=>a-b);
    for (let i=0; i<arr.length;i++){
        sum += arr[i];
        
        if(sum < budget){
            answer += 1;
        }else if(sum == budget){
            answer += 1;
            return answer;
        }else{
            return answer;
        }
    }
    return answer;
}