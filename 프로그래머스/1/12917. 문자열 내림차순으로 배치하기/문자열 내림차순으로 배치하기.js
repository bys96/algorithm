function solution(s) {
    var answer = '';
    var sol = s.split("").sort((a,b) => {
    if(a>b){
        return -1;
    }else if(a<b){
        return 1;
    }else{
        return 0;
    }
    });
    
    console.log(sol);

    for(let j=0;j<sol.length;j++){
        if(sol[j]===sol[j].toLowerCase()){
            answer += sol[j];
        }
    }
    console.log(answer);
        for(let i=0;i<sol.length;i++){
        if(sol[i]===sol[i].toUpperCase()){
            answer += sol[i] ;
        }
    }
    return answer;
}