function solution(myString, pat) {
    if(myString.toUpperCase().includes(pat.toUpperCase())){
        var answer = 1;
    }else{
        var answer = 0;
    }
    return answer;
}