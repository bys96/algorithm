function solution(n) {
    var answer = 0;
    let arr = [0,1];
    for(let i=2; i<=n; i++){
        arr[i] = (arr[i-1] + arr[i-2])%1234567;
    }
    console.log(arr[n]);
    answer = arr[n];
    return answer;
}