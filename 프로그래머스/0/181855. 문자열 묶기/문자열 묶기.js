function solution(strArr) {
    var answer = 0;
    let numArr= [];
    let Arr = strArr.map(index=>index.length);
    for(let i=0; i< Arr.length; i++){
        if(numArr.includes(Arr[i])){
            continue;
        }else{
            numArr.push(Arr[i]);
            let count = 0;
            for(let j=0; j<Arr.length; j++){
                if(Arr[i]===Arr[j]){
                    count ++;
                }
                if(count >= answer){
                   answer = count; 
                }
            }
        }
    }
    return answer;
}