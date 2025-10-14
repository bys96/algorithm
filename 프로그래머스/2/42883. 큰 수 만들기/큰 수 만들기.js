function solution(number, k) {
    var answer = '';
    number = number.split("");
    let stack = [];
    
    for(let num of number){
        while(stack.length >0 && stack.at(-1) < num && k>0){
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    if(k>0) stack = stack.slice(0,stack.length-k);
    
    answer = stack.join("");
    return answer;
}