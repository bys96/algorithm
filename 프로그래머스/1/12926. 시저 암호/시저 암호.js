function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)==32){
            answer += s[i];
        }else{
        if(s.charCodeAt(i) >= 97){
            if(s.charCodeAt(i)+n > 122){
                answer += String.fromCharCode(s.charCodeAt(i)+n-26);
            }else{
                answer += String.fromCharCode(s.charCodeAt(i)+n);
            }
                
        }else{
            if(s.charCodeAt(i)+n > 90){
                answer += String.fromCharCode(s.charCodeAt(i)+n-26);
            }else{
                answer += String.fromCharCode(s.charCodeAt(i)+n);
            }
        }
        }
    }
    return answer;
}