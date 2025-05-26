function solution(lines) {
    var answer = 0;
    let len2 = ([a1,b1],[a2,b2]) => (Math.max(a1,a2) < Math.min(b1,b2)) ? Math.abs(Math.max(a1,a2)-Math.min(b1,b2)) : 0;
    let len3 = ([a1,b1],[a2,b2],[a3,b3]) => Math.max(a1,a2,a3) < Math.min(b1,b2,b3) ? Math.abs(Math.max(a1,a2,a3) - Math.min(b1,b2,b3)) : 0;
    let [x1,x2,x3] = lines;
    answer= len2(x1,x2) + len2(x2,x3) + len2(x1,x3) - len3(x1,x2,x3)*2;
    
    return answer;
}