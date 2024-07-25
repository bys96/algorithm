function solution(dartResult) {
    var answer = [];
    var save = dartResult;
    var array = [1,1,1];
    for(let i=0; i<dartResult.length; i++){
        if(dartResult[i]=="#"){
            if(i==2){
                array[0] = -1;
                save = dartResult.slice(0,i)+dartResult.slice(i+1);

            }else if(i==dartResult.length-1){
                array[2] = -1;
                save = dartResult.slice(0,dartResult.length-1);

            }else{
                array[1] = -1;
                save = dartResult.slice(0,i)+dartResult.slice(i+1);

            }
        }
    }
    // # 먼저 해결
    for(let i=0; i<save.length; i++){
        if(save[i]=="*"){
            if(i==2){
                array[0] *= 2;
                save = save.slice(0,i)+save.slice(i+1,save.length);

            }else if(i==save.length-1){
                array[2] *= 2;
                array[1] *= 2;
                save = save.slice(0,save.length-1);

            }else{
                array[0] *= 2;
                array[1] *= 2;
                save = save.slice(0,i)+save.slice(i+1,save.length);

            }
        }
    }
    // * 해결
    console.log(array);
    
    for(let i=0; i<save.length; i++){
        
        if(save[i]=="1" && save[i+1]=="0"){
            if(save[i+2]=="S"){
                answer.push(Number(10));
            }else if(save[i+2]=="D"){
                answer.push(Number(10**2));
            }else if(save[i+2]=="T"){
                answer.push(Number(10**3));
            }
        i=i+2;
        }else{
            if(save[i+1]=="S"){
                answer.push(Number(save[i]));
            }else if(save[i+1]=="D"){
                answer.push(Number(save[i]**2));
            }else if(save[i+1]=="T"){
                answer.push(Number(save[i]**3));
            }
        }
    }
    console.log(answer);
    console.log(array);
    for(let i=0;i<answer.length;i++){
        answer[i] = answer[i]*array[i];
    }
    console.log(answer);
    return answer.reduce((a,b) => a+b,0);
}