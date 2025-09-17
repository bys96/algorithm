function solution(n) {
    var answer = 0;
    /*let queue = [0];
    let idx = 0;
    
    while(idx < queue.length){
        
        let num = queue[idx++];
        if(num == n) answer= (answer+1)%1;
        else if(num > n) continue;
        
        queue.push(num+1);
        queue.push(num+2);
        
    }
    return answer;
    */
    let arr = new Array(n+1).fill(0);
    arr[0] = 1;
    arr[1] = 1;
    
    for(let i=2; i<=n; i++){
        arr[i] = (arr[i-1] + arr[i-2])%1000000007;
    }
    
    return arr[n];
}