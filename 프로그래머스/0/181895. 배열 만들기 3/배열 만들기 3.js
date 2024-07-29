// function solution(arr, intervals) {
//     var answer = [];
//     for(let i=0; i<=1; i++){
//         for(let j=intervals[i][0]; j<=intervals[i][1]; j++){
//             answer.push(arr[j]);
//         }
//     }
//     return answer;
// }

function solution(arr, intervals) {
    var answer = [];
    let [[a,b],[c,d]] = intervals;
    answer = [...arr.slice(a,b+1),...arr.slice(c,d+1)];
    return answer;
}