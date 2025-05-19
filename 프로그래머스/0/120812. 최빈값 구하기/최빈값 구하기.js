function solution(array) {
    let obj = {};
    let max = 0;
    let count = 0;
    let answer = 0;
    
    for(let num of array){
        obj[num] = obj[num] ? obj[num]+1 : 1;
    }
    
    for(let i in obj){
        if(obj[i] > max) {
        max = obj[i]
        answer = Number(i);
        count = 1;
        }else if(obj[i] == max){
            count++;
        }
    }
    
    return count == 1 ? answer : -1;
}