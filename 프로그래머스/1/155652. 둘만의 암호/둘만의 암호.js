function solution(s, skip, index) {
    let a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let answer = '';
    
    let b = a.filter(val => !skip.includes(val));
    answer = s.split("").map(val => b[(b.indexOf(val)+index)%b.length]).join("");
    return answer;
}