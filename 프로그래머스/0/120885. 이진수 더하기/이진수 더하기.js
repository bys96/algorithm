function solution(bin1, bin2) {
    var answer = '';
    var num = 0;
    var sum = String(Number(bin1) + Number(bin2)).split("");
    
    for(let i=sum.length-1; i>=0; i--){
        num += sum[i]*2**(sum.length-i-1);
    }
    
    while(num>=1){
        answer += num%2;
        num = Math.floor(num/2);
    }
    
    answer = answer.split("").reverse().join("");
    
    return answer=="" ? "0" : answer;
   
}