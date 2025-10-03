function solution(numbers) {
    var answer = [];
    answer = numbers.map(v=>f(v));
    return answer;
}

function f(x) {
    let bin = x.toString(2).split("");
    if(bin[bin.length-1] == 0){
        bin[bin.length-1] = "1";
        return parseInt(bin.join(""),2);
    }
    else{
        let checknum = -1;
        for(let i=bin.length-1; i>=0; i--){
            if(bin[i]=="0"){
                bin[i] = "1";
                checknum = i;
                break;
            }
        }
        for(let j=checknum+1; j<bin.length; j++){
            if(bin[j]=="1"){
                bin[j] = "0";
                break;
            }
        }
        if(checknum != "-1"){
            return parseInt(bin.join(""),2);
        }else{
            bin[0] = "0";
            return parseInt(("1"+bin.join("")),2);
        }
    }
}