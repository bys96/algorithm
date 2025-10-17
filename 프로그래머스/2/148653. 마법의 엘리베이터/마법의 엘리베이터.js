function solution(storey) {
    var answer = 0;
    let arr = storey.toString().split("").reverse().map(Number);
    
    for(let i=0; i<arr.length; i++){
        while(arr[i]>=10){
            arr[i] -= 10;
            
            if(arr[i+1]){
                arr[i+1]+=1;
            }else{
                arr.push(1);
            }
        }
        
        if(arr[i]<=4){
            answer+=arr[i];
        }else if(arr[i]>5){
            answer+= 10-arr[i];
            if(arr[i+1]){
                arr[i+1]+=1;
            }else{
                arr.push(1);
            }
        }else{
            if(arr[i+1] !== undefined && arr[i+1]>=5){
                answer+=10-arr[i];
                arr[i+1]+=1;
            }else{
                answer+=arr[i]
            }
        }
    }
    
    return answer;
}