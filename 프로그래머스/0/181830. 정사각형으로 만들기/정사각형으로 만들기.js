function solution(arr) {
    while(arr.length !== arr[0].length){
        if(arr.length < arr[0].length){
            arr.push(Array(arr[0].length).fill(0));
        }else{
            arr.map((val,idx) => val = val.push(0));
        }
    }
    
    return arr;
}