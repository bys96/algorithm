function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
    var arr1 = [];
    var arr2 = [];
    arr1= array.slice(commands[i][0]-1,commands[i][1]);
    arr2= arr1.sort((a,b) => a-b);
    answer.push(arr2[commands[i][2]-1]);
    }
    return answer;
}