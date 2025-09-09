function solution(prices) {
    var answer = new Array(prices.length).fill(0);
    let stack = [];
    for(let i=0; i<prices.length; i++){
        
        while(stack.length && prices[i] < prices[stack[stack.length-1]]){
            let idx = stack.pop();
            answer[idx] = i -idx
        }
        
        stack.push(i);
    }
    
    while(stack.length){
        let idx = stack.pop();
        answer[idx] = prices.length-1-idx;
    }
    
    return answer;
}