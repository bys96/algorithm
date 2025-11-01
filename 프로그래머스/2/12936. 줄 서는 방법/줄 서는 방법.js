function solution(n, k) {
    var answer = [];
    let arr = [];
    
    function factorial(num){
        let number = 1;
        for(let i=1; i<=num; i++) number*=i;
        return number;
    }
    
    for(let i=1; i<=n; i++) arr.push(i);
    
    k--;
    
    while(arr.length>0){
        let num = Math.floor(k/factorial(n-1));
        answer.push(arr[num]);
        arr.splice(num,1);
        k = k%factorial(n-1);
        n--;
    }
    return answer;
}