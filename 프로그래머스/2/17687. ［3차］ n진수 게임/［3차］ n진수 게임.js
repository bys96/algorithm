function solution(n, t, m, p) {
    var answer = "";
    let count = 0;
    let str = "";
    
    while(answer.length<t){
        str += count.toString(n).toUpperCase();
        count++;
        if(str.length >= m*t+p){
            for(let i=0; i<t; i++){
                answer+=str[p+(m*i)-1];
            }
        }
    }
    return answer;
}