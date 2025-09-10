function solution(order) {
    var answer = 0;
    let stack = [];
    let num = 1;
    
    while(num <= order.length){
        stack.push(num);
        
        while(stack.length>0 && stack.at(-1) == order[answer]){
            stack.pop();
            answer++;
        }
        
        num++;
    }
    
    return answer;
}