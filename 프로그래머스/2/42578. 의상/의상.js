function solution(clothes) {
    var answer = 1;
    let obj = {};
    
    for(let i=0; i<clothes.length; i++){
        let [a,b] = clothes[i];
        if(obj[b]) obj[b].push(a);
        else obj[b] = [a];
    }
    
    for(let i of Object.keys(obj)){
        answer *= obj[i].length+1;
    }
    
    return answer-1;
}