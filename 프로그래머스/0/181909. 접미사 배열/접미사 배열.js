function solution(my_string) {
    var answer = [];
    for(let i=0; i<my_string.length; i++){
        answer.push(my_string.slice(-i));
    }
    answer.sort((a,b) => {
        if(b>a){
            return -1;
        }else{
            return 1;
        }
    });
    return answer;
}