function solution(n, m) {
    var answer = [];
    var arr = [];
    var max = 0;
    var min = 0;
    if(n<m){
        for(let i=1; i<=n; i++){
            if(n%i==0 && m%i==0){
                arr.push(i);
            }
        }
        max = arr[arr.length-1];
        min = n*m/max;
    }else{
        for(let i=1; i<=m; i++){
            if(n%i==0 && m%i==0){
                arr.push(i);
            }
        }
        max = arr[arr.length-1];
        console.log(max);
        min = n*m/max;
    }
    answer.push(max,min);
    return answer;
}