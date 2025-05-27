function solution(s) {
    var answer = 0;
    let spell = '';
    let count = new Array(2).fill(0);
    
    for(let i=0; i<s.length; i++){
        if (count[0] == 0){
            spell = s[i];
            count[0]++;
        }else{
            s[i] == spell ? count[0]++ : count[1]++;
            if(count[0] == count[1]){
                answer++;
                count = [0,0];
            }
        }
        
        if(i == s.length-1 && count[0] != 0) answer++;
    }
    
    return answer;
}