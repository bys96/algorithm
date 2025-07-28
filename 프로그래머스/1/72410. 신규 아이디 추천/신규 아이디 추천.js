function solution(new_id) {
    var answer = '';
    let word = new_id.toLowerCase();
    for(let i=0; i<word.length; i++){
        s = word[i];
        if(!( s >= 'a' && s<= 'z') && s!="-" && s!="_" && s!="." && !(s>=0 && s<=9)){
            continue;
        }else{
            answer+=s
        }
    }
    while(answer.indexOf("..") >= 0){
        answer = answer.split("..").join(".");
    }
    
    if(answer[0] == ".") answer = answer.slice(1,answer.length);
    if(answer[answer.length-1] == ".") answer = answer.slice(0,answer.length-1);
    
    if(answer == ""){
        answer += "a";
    }
    if(answer.length >= 16){
        answer = answer.slice(0,15);
        if(answer[14] == "."){
            answer = answer.slice(0,14);
        }
    }
    
    if(answer.length <= 2){
        let k = answer[answer.length-1];
        while(answer.length<3){
            answer += k;
        }
    }
    return answer;
}