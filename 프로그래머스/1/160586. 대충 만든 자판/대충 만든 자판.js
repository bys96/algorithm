function solution(keymap, targets) {
    var answer = [];
    let index = 10000;
    let num = 0;
    
    for(let target of targets){
        for(let i=0; i<target.length; i++){
            for(let key of keymap){
                if(key.includes(target[i]) && index > key.indexOf(target[i]) ){
                    index = key.indexOf(target[i]);
                }
            }
            if(index !== 10000){
                num += index+1;
                index = 10000;
            }else{
                num =0;
                break;
            }
        }
        if(num == 0){
            answer.push(-1);
        }
        else{
        answer.push(num);
        num = 0;
        }
    }
    return answer;
}