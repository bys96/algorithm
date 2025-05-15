function solution(code) {
    var answer = '';
    let mode = 0;
    
    for(let i=0; i<code.length; i++){
        if(i%2===0 && mode%2 === 0){
            if(code[i]==="1"){
                mode++;
            }else{
            answer+=code[i];
            }
            
        }else if(i%2!==0 && mode%2 ===1){
            if(code[i]==="1"){
                mode++;
            }else{
                answer+=code[i];
            }
        }else{
            if(code[i]==="1") mode++;
        }
    }
    return answer.length ? answer : "EMPTY";
}