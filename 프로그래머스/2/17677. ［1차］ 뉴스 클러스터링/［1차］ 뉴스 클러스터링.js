function solution(str1, str2) {
    var answer = 0;
    let obj1 = {};
    let obj2 = {};
    
    for(let i=0; i<str1.length-1; i++){
        let str = str1[i]+str1[i+1];
        if(/^[A-Za-z]{2}$/.test(str)){
            str = str.toLowerCase();
            obj1[str] = (obj1[str] || 0) + 1;
        }
    }
    
    for(let j=0; j<str2.length-1; j++){
        let str = str2[j]+str2[j+1];
        if(/^[A-Za-z]{2}$/.test(str)){
            str = str.toLowerCase();
            obj2[str] = (obj2[str] || 0) + 1;
        }
    }
    
    let set = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    
    let min=0,max=0;
    
    for(key of set){
        let a = obj1[key] || 0;
        let b = obj2[key] || 0;
        min += Math.min(a,b);
        max += Math.max(a,b);
    }
    
    answer = max==0 ? 65536 : Math.floor(min/max*65536);
    
    return answer;
}