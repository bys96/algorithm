function solution(X, Y) {
    var answer = [];
    let Xmap = new Map;
    let Ymap = new Map;
    
    for(let i=0; i<X.length; i++){
        Xmap.set(X[i],(Xmap.get(X[i]) || 0) +1);
    }
    for(let i=0; i<Y.length; i++){
        Ymap.set(Y[i],(Ymap.get(Y[i]) || 0) +1);
    }
    
    for(let k of Xmap.keys()){
        if(Ymap.has(k)){
            let count = Math.min( Xmap.get(k),Ymap.get(k) );
            for(let i=0; i<count; i++){
                answer.push(k);
            }
        }
    }
    if(answer.length ===0 ) return "-1";
    if([...new Set(answer)].length===1 && answer[0] == "0" ) return "0";
    
    return answer.sort((a,b)=>b-a).join("");
}