function solution(s) {
    var answer = [];
    let arr = []
    let set = new Set();
    let a = ""
    for(let i = 1; i<s.length-1; i++){
        if(s[i]=="{"){
            a="";
        }
        else if(s[i]=="}"){
            a= a.split(",");
            arr.push(a);
        }
        else{
            a+=s[i];
        }
    }
    arr.sort((a,b)=> a.length-b.length);
    for(let group of arr){
        for(let num of group){
            if(!set.has(num)){
                set.add(num);
                answer.push(Number(num));
            }
        }
    }
    
    
    return answer;
}