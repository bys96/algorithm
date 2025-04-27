function solution(my_string) {
    var answer = [];
    answer = new Array(52).fill(0);
    
    for(let i=0; i<my_string.length; i++){
        if(my_string[i].charCodeAt(0) <= 90){
        answer[my_string[i].charCodeAt(0) - 65]++
        }else{
            answer[my_string[i].charCodeAt(0) - 71]++
        }
    }
    return answer;
}