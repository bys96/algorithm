function solution(arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i<arr1.length; i++){
        let arr = [];
        for(let j=0; j<arr2[0].length; j++){
            let num = 0; 
            arr1[i].forEach((v,idx) => num += v*arr2[idx][j]);
            arr.push(num);
        }
        answer.push(arr);
    }
    
    
    
    return answer;
}