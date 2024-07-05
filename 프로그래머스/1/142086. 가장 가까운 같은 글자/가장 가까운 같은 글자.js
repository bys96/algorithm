function solution(s) {
    let arr = [];
    var answer = [];
    for(let i=0; i<s.length; i++){
        arr.push(s[i]);
    }
    for(let i=0; i<arr.length; i++){
        for(let j=i-1; j>=0; j--){
            if(arr[i] == arr[j]){
                answer.push(i-j);
                break;
            }

            }
        if(answer[i]==undefined){
                answer.push(-1);
        }
                
    }
    
    return answer;
}