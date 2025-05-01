function solution(arr, queries) {
    var answer = [];
    var sliced = [];
    var num = 1000000;
    
    for(let i = 0; i < queries.length; i++){
        sliced = arr.slice(queries[i][0],queries[i][1]+1);
        for(let j=0; j<sliced.length; j++){
            if(sliced[j] > queries[i][2] && sliced[j] < num){
                num = sliced[j];
            }
        }
        if(num == 1000000){
            answer.push(-1);
        }else{
        answer.push(num);
        }
        num = 1000000;
    }
    return answer;
}