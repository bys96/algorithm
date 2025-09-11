function solution(msg) {
    var answer = [];
    let obj = {};
    let idx = 1;
    for(let i=0; i<26; i++){
        obj[String.fromCharCode(65+i)] = idx++;
    }
    
    let w = "";
    for(let c of msg){
        let wc = w+c;
        
        if(obj[wc]){
            w = wc;
        }else{
            answer.push(obj[w]);
            obj[wc] = idx++;
            w=c;
        }
    }
    
    if(w) answer.push(obj[w]);
    
    return answer;
}