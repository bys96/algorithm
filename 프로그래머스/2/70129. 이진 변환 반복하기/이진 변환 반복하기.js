function solution(s) {
    var answer = [0,0];
    let len = 0;
    let a = "";
    while(s.length != 1){
        let num = "";
        for(let i=0; i<s.length; i++){
            if(s[i] == "0") answer[1]++;
            else num += s[i] + "";
        }
        answer[0]++;
        len = num.length;
        a="";
        while(len > 0){
            
            a+=len%2 + "";
            len = Math.floor(len/2);
        }
        s=a.split("").reverse().join("");
    }
    
    return answer;
}