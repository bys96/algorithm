function solution(arr) {
    var answer = [];
    
    for(let i =0; i<arr.length; i++){
        if(arr[i]===2){
            for(let j=arr.length; j>=i; j--){
                if(arr[j]==2){
                    for(let k = i; k<=j; k++){
                        answer.push(arr[k]);
                    }
                    break;
                
                }else if(i==j){
                    answer.push(2);
                }
            }
            break;
        }
        
    }
    if (answer==""){
        answer.push(-1);
    }
    return answer;
}