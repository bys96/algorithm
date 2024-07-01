function solution(x) {
    var answer = true;
    var num = String(x);
    var sum = 0;
    for(let i=0;i<num.length;i++){
        sum+= parseInt(num[i])
    }
    if(x%sum==0){
        return true;
    }
    return false;
}