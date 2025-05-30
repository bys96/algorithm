function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n+2).fill(1);
    lost.forEach(v => arr[v] = arr[v]-1);
    reserve.forEach(v => arr[v] = arr[v]+1);
    for(let i=1; i<=n; i++){
        if(arr[i]==2){
            if(arr[i-1] == 0){
                arr[i] = 1;
                arr[i-1] = 1;
                i--;
            }else if(arr[i+1] == 0){
                arr[i] = 1;
                arr[i+1] = 1;
                i--;
            }
        }
    }
    answer = arr.reduce((acc,val) => val>0 ? acc+1 : acc , -2);
    return answer;
}