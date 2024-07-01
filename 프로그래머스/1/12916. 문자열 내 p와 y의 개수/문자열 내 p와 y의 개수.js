function solution(s){
    var answer = true;
    var countp =0;
    var county =0;
    for(let i=0;i<s.length;i++){
        if(s[i].toUpperCase()=="Y") {
            county += 1;
        }else if(s[i].toUpperCase()=="P") {
            countp += 1;
        }
    }
    console.log(countp);
    console.log(county);
    if(county !== countp){
        return false;
    }
    return true;
    
}