function solution(arr, queries) {
    
    for(let i=0; i<queries.length; i++){
        var answer = [...arr];
        answer[queries[i][1]] = arr[queries[i][0]];
        answer[queries[i][0]] = arr[queries[i][1]];
        arr = answer;
    }
    return answer;
}