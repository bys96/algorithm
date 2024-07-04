function solution(t, p) {
    var answer = 0;
    for(let i=0; i+p.length <= t.length; i++ ){
        console.log(Number(t.slice(i+0,i+p.length)));
    if(Number(p)>=Number(t.slice(i+0,i+p.length))){
        
       answer +=1;
       }
    }
    return answer;
}