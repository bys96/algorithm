// function solution(str1, str2) {
//     var answer = '';
//     for(let i=0; i<str1.length; i++){
//         answer += str1[i] + str2[i];
//     }
//     return answer;
// }

function solution(str1, str2) {
    var answer = '';
    answer = str1.split("").map((val,idx) => val+str2[idx]).join("");
    return answer;
}