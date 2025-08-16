function solution(citations) {
    var answer = 0;
    let n = citations.length;
    
    for(let i=n; i>=0; i--){
        let h = citations.filter(v => v>=i).length;
        if(h>=i && n-h <= i) return i;
    }
    return answer;
}