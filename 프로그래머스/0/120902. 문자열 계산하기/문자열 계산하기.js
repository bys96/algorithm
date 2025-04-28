function solution(my_string) {
    var answer = 0;
    /*
    let num = '';
    let pm = 1;
    
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] == "+"){
            answer += Number(num) * pm;
            pm = 1;
            num = '';
        }else if(my_string[i] == "-"){
            answer += Number(num) * pm;
            pm = -1;
            num = ''
        }else if(my_string[i] == " "){
            continue;
        }else{
            num += my_string[i];
        }
        
        if(i == my_string.length-1){
            answer += Number(num) * pm; 
        }
    } */
    
    let array = [];
    array = my_string.split(" ");
    answer = Number(array[0]);
    for(let i=1; i<array.length; i++){
        if(array[i] == "+"){
            answer += Number(array[i+1]); 
        }else if(array[i] == "-"){
            answer -= Number(array[i+1]);
        }
    }
    
    return answer;
}