function solution(polynomial) {
    var answer = [0,0];
    let arr = polynomial.split("+").map(val => val.trim(" "));
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes("x")){
            answer[0] += Number(arr[i].slice(0,-1));
            if(arr[i].length === 1){
                answer[0]++;
            }
        }else{
            answer[1] += Number(arr[i]);
        }
    }
    if(answer[0]==1) answer[0] = "";
    answer[0] = answer[0] + "x";    
    answer[1] += "";
    answer = answer.map(val => val[0] == 0 ? "" : val);
    answer = answer.filter(val => val !== "").join(" + ");
    
    return answer;
}