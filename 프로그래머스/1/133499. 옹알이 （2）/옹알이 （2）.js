function solution(babbling) {
    let answer = [];
    let [a,b,c,d] = ["aya","ye","woo","ma"];
    let arr = [a+a,b+b,c+c,d+d];
    for(let i of babbling){
        if(arr.some(val => i.includes(val))){
            i = "x";
        }
        answer.push( i.split(a).join("z").split(b).join("z").split(c).join("z").split(d).join("z").replaceAll("z",""));
    }
    console.log(answer);
    
    return answer.filter(val => val == "").length;
}