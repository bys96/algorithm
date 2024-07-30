function solution(arr) {
    let leng = arr.length;
    for(let i=0; i<leng; i++){
        for(let j=0; j<leng; j++){
            if(arr[i][j]==arr[j][i]){
                continue;
            }else{
                return 0
            }
        }
    }
    return 1;
}