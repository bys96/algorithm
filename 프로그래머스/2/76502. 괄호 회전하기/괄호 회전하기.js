function solution(s) {
    var answer = 0;
    let stack = [];
    let str = "";
    let boolean = true;
    
    for(let i=0; i<s.length; i++){
        str = s.slice(0+i,s.length) + s.slice(0,i);
        stack = [];
        boolean = true;
        for(let j=0; j<str.length; j++){
            if(str[j]==")"){
                if(stack[stack.length-1] == "("){
                    stack.pop();
                }else{
                    boolean = false
                    break;
                }
            }else if(str[j]=="}"){
                if(stack[stack.length-1] == "{"){
                    stack.pop();
                }else{
                    boolean = false;
                    break;
                }
            }else if(str[j]=="]"){
                if(stack[stack.length-1] == "["){
                    stack.pop();
                }else{
                    boolean = false;
                    break;
                }
            }else{
                stack.push(str[j]);
            }
        }
        if(stack.length == 0 && boolean) answer++;
        
    }
    return answer;
}