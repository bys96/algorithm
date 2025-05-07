function solution(rank, attendance) {
    var answer = 0;
    let count = 1;
    let arr = [];
    
    while(arr.length<=2){
        for (let i =0; i<rank.length; i++){
            if(rank[i] == count){
                if(attendance[i]){
                    arr.push(i);
                }
                
            }
        }
        count++;
        
    }
    answer = arr[0]*10000 + arr[1]*100 + arr[2];
    return answer;
}