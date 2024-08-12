function solution(array, n) {
    var answer = 0;
    let newarray = array.map(val=>Math.abs(val-n)).sort((a,b)=>a-b);
    if(array.includes(n-newarray[0])){
        return n-newarray[0];    
    }
    return n+newarray[0]
    
}