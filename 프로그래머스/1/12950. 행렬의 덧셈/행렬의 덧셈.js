function solution(arr1, arr2) {
    var answer = [];
    
    for(let i=0; i< arr1.length; i++){
        var a = [];
        for(let j=0; j<arr1[i].length;j++){
            var num =0;    
            num =arr1[i][j]+arr2[i][j];
            // console.log(num);
            a.push(num);
        }
        answer[i] =a;
    }
    return answer;
}