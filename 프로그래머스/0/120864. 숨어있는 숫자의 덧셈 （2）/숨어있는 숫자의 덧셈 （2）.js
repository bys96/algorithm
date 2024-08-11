function solution(my_string) {
    var answer = 0;
    my_string += 'a';
    for(let i=0; i<my_string.length; i++){
        if(!isNaN(my_string[i])){
            let val = 0;
            while(!isNaN(my_string[i])){
                val += my_string[i];
                i++
            }
            answer += Number(val);
        }
    }
    return answer;
}