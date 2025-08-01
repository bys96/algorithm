function solution(n) {
    var answer = 0;
    let num = ""
    let count = 0;
    let isone = false;
    
    while(n/2 > 0){
        num = n%2 + "" + num;
        n = Math.floor(n/2);
    }
    num = num.split("");
    let len = num.length
    
    for(let i=len-1; i>=0; i--){
        if(num[i]==1){
            count++;
            num[i] = 0;
            isone = true;
            if(i==0){
                num.push("0");
                num[i] = 1;
                for(let j=len; j>len-count+1; j--){
                    num[j] = 1;
                }
            }
        }else{
            if(isone){
                num[i] = 1;
                for(let j=len-1; j>len-count; j--){
                num[j] = 1;
                }
                break;
            }
        }
    }
    num = num.join("");
    answer = parseInt(num,2);
    return answer;
}