function solution(n, k) {
    var answer = 0;
    let bool = true;
    let arr = n.toString(k).split("0");
    for(let num of arr){
        if(!num || num <= 1) continue;
        else if(num==2) {
            answer++;
            continue;
        }
        bool = true;
        num = Number(num);
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i==0){
                bool = false;
                break;
            }
        }
        if(bool) answer++;
    }
    return answer;
}