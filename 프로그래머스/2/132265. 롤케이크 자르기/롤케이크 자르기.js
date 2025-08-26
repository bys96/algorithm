function solution(topping) {
    var answer = 0;
    let set = new Set();
    let map = new Map();
    
    for(let i of topping){
        map.set(i,(map.get(i)||0)+1);
    }
    
    for(let i of topping){
        if(!set.has(i)){
            set.add(i);
        }
        map.set(i,map.get(i)-1);
        if(!map.get(i)){
            map.delete(i);
        }
        
        if(set.size == map.size) answer++;
    }
    
    return answer;
}