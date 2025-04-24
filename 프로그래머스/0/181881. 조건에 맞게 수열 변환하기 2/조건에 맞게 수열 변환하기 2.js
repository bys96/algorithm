function solution(arr) {
    var answer = 0;
    var arr2 = [];
    while(true){
        arr2 = arr.slice();
        for(let i=0; i<arr.length; i++){
            if (arr[i]>=50 && arr[i]%2==0){
                arr[i] = arr[i]/2;
            }else if(arr[i] < 50 && arr[i]%2 == 1){
                arr[i] = arr[i]*2 +1;
            }
        }
        answer++;
        
        if(arr.every((val,idx) => val == arr2[idx])){
            return answer-1;
        }
    }
}