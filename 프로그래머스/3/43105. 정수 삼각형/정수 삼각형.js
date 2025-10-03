function solution(triangle) {
    var answer = 0;
    let stack = [];
    
    for(let arr of triangle){
        let temp = arr;
        let len = arr.length;
        for(let i=0; i<len; i++){
            if(stack[i] && stack[i-1]){
                temp[i] = temp[i] + Math.max(stack[i],stack[i-1])
            }else if(stack[i]){
                temp[i] += stack[i];
            }else if(stack[i-1]){
                temp[i] += stack[i-1];
            }
        }
        stack = temp;
    }
    answer = Math.max(...stack);
    return answer;
}