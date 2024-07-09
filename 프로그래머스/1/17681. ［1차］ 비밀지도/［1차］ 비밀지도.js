function solution(n, arr1, arr2) {
    var answer = [];
    var arr3 = [];
    var arr4 = [];
    var str = "";
    for(let i=0; i<n; i++){
    arr3.push(Number(arr1[i]).toString(2));
    arr4.push(Number(arr2[i]).toString(2));
        while(arr3[i].length!==n){
            arr3[i] = "0" + arr3[i];
        }
        while(arr4[i].length!==n){
            arr4[i] = "0" + arr4[i];
        }
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr3[i][j]==1 || arr4[i][j] ==1){
                str += "#";
            }else{
                str += " ";
            }
        }
        answer.push(str);
        str="";
    }
    return answer;
}