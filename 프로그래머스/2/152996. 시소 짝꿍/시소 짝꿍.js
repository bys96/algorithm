function solution(weights) {
    var answer = 0;
    let dic = {};
    let count = {};
    
    for(let weight of weights){
        dic[weight] = true;
        count[weight] = count[weight]+1 || 1;
    }
    
    weights = [...new Set(weights)].sort();
    
    for(let weight of weights){
        let n = count[weight];
        
        if(dic[weight*4/2]) answer += n*count[weight*4/2];
        if(dic[weight*4/3]) answer += n*count[weight*4/3];
        if(dic[weight*3/2]) answer += n*count[weight*3/2];
        if(count[weight] >= 2) answer += n*(n-1)/2;
    }
    
    return answer;
}