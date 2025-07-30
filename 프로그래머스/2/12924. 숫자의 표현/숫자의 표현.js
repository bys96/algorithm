function solution(n) {
    var answer = 1;
    for(let i=1; i< Math.ceil(n/2)+1; i++){
        let num = 0;
        num += i;
        for(let j=i+1; j<Math.ceil(n/2)+1; j++){
            num += j;
            if(num < n) continue;
            else if(num > n) break;
            else {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}