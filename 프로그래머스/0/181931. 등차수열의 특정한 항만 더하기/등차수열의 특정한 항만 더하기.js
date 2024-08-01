function solution(a, d, included) {
    let array = included.map((item,idx) => item==true ? a+d*idx : 0 );
    console.log(array);
    
    return array.reduce((acc,val)=> val!==0 ? acc+val : acc);
}