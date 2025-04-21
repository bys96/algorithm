function solution(array) {
    var answer = 0;
    for(let i=0; i<array.length; i++){
        for(let j=0; j<String(array[i]).length; j++){
            if(String(array[i])[j]==7){
                answer++;
            }
        }
    }
    return answer;
}