function solution(my_str, n) {
    var answer = [];
    var word = "";
    for(let i=0; i<my_str.length; i++){
        if(i%n==0 && i!==0){
            answer.push(word);
            word="";
            word+=my_str[i];
            if(i==my_str.length-1){
                answer.push(word);
            }
            
        }else{
            word+=my_str[i];
            if(i== my_str.length-1){
                answer.push(word);
            }
        }
    }
    return answer;
}