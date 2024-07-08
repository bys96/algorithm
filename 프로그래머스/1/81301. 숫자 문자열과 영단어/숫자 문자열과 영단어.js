function solution(s) {
    var answer = "";
    var word = "";
    var obj = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    };
    
    for(let i=0; i< s.length; i++){
        if(!isNaN(s[i])){
            answer += s[i];
        }else{
            word += s[i];
            if(obj[word]!==undefined){
                answer += obj[word];
                word = "";
            }else{
                continue;
            }
        }
    }
    
    return Number(answer);
}