function solution(l, r) {
    var answer = [];
    
    function a(b) {
        let num = parseInt(b);
        if(num > r) return;
        
        if(num >= l) answer.push(num);
        
        a(b+'0');
        a(b+'5');
    }
    
    a(5);
    
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}