function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    let idx = [];
    
    for(let i=0; i<numbers.length; i++){
        if(i==0){
            idx.push(i);
            continue;
        }
        while(idx.length && numbers[idx.at(-1)] < numbers[i]){
            let n = idx.pop();
            answer[n] = numbers[i];
        }
        idx.push(i);
        
    }
    return answer;
}