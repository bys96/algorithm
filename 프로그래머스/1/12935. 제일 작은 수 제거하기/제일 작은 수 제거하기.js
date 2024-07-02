function solution(arr) {
    var answer = [];
    var min = arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    if(arr.length==1){
        return [-1];
    }
    answer = arr.filter(a => a !== min);
    return answer;
}