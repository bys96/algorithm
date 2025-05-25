function solution(a, b, c, d) {
    var answer = 0;
    let arr = [a,b,c,d].slice().sort((a,b) => a-b);
    let setArr = [...new Set(arr)];
    let len = setArr.length;
    console.log(arr);
    if(len == 4){
        answer = arr[0];
    }
    else if(len == 3){
        let p = setArr.find(val => arr.filter(v => v == val).length === 2);
        answer = setArr.filter(v => v !== p).reduce((acc,val) => acc *= val,1);
    }else if(len == 2){
        if(setArr.find(val => arr.filter(v=>v == val).length === 3)){
            let p = setArr.find(val => arr.filter(v=>v == val).length === 3)
            answer = ((10*p)+setArr.filter(v => v!= p)[0])**2;
        }else{
        answer = (setArr[0] + setArr[1]) * Math.abs(setArr[0] - setArr[1]);
        }
    }else{
        answer = a*1111
    }
    
    return answer;
}