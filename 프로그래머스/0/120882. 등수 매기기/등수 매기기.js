function solution(score) {
    var answer = [];
    let highscore = 0;
    let rank = 1;
    let arr = score.map((arr,idx) => [(arr[0]+arr[1])/2,idx]).sort((a,b) => b[0]-a[0]);
    for(let i=0; i<arr.length; i++){
        if(highscore !== arr[i][0]){
            highscore = arr[i][0];
            arr[i][0] = rank;
        }else{
            arr[i][0] = arr[i-1][0];
        }
        rank++;
    }
    arr.sort((a,b) => a[1] - b[1]).forEach((val)=>answer.push(val[0]));
    return answer;
}