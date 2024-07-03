function solution(n) {
    var answer = "";
    var reanswer = "";
    var num = 0;
    while(n!==0){
        answer += String(n%3) ;
        n = Math.floor(n/3);
    }
    reanswer = answer.split("").reverse().join("");
    for(let i=0;i<answer.length;i++){
    num += Number(reanswer[i]) * (3**i) ;
    }
    return num;
       
}