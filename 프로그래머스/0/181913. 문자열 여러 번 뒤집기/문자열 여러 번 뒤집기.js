function solution(my_string, queries) {
    var answer = my_string;
    var reversedWord = '';
    var word = '';
    for(let i=0; i<queries.length; i++){
        word = answer.slice(queries[i][0],queries[i][1]+1);
        reversedWord = word.split("").reverse().join("");
        answer = answer.slice(0,queries[i][0]) + reversedWord + answer.slice(queries[i][1]+1);
        
    }
    return answer;
}