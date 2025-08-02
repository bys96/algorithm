function solution(k, tangerine) {
    var answer = 0;
    let obj = {};
    
    for(let i=0; i<tangerine.length; i++){
        obj[tangerine[i]] ? obj[tangerine[i]]++ : obj[tangerine[i]] = 1;
    }
    
    let arr = Object.values(obj).sort((a,b)=> b-a);
    
    for(let j of arr){
        k -= j;
        answer++;
        if(k <=0 ) break;
    }
    
    return answer;
}