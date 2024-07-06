function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++){
        var arr = numbers.map((a) => a += numbers[i]);
        for(let j=0; j<arr.length; j++){
            if(j!==i){
                if(!answer.includes(arr[j])){
                answer.push(arr[j]);
                }
            }
        }
    }
    return answer.sort((a,b)=>a-b);
}