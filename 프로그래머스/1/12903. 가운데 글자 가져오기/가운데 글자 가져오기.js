function solution(s) {
    var answer = '';
    if(s.length%2==1){
        answer+=s[(s.length+1)/2-1]
    }else{
        answer = answer + s[Math.floor((s.length+1)/2)-1] + s[Math.ceil((s.length+1)/2)-1];
    }
    return answer;
}