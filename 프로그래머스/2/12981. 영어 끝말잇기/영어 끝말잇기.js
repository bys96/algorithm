function solution(n, words) {
    var answer = [];
    let obj = {};
    let idx=0;

    obj[words[0]] = 1;
    for(let i =1; i<words.length; i++){
        obj[words[i]] = obj[words[i]] ? obj[words[i]]+1 : 1; 
        if(words[i-1].slice(-1) != words[i][0]){
            idx = i;
            break;
        }else if(obj[words[i]]==2){
            idx = i;
            break;
        }
    }
    
    answer = [(idx%n)+1,Math.floor(idx/n +1) ]

    return idx==0 ? [0,0] : answer;
}