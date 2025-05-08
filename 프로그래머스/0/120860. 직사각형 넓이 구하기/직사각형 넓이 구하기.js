function solution(dots) {
    var answer = 0;
    const x =[];
    const y =[];
    for(let i=0; i<dots.length; i++){
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    answer = x.sort((a,b)=>a-b).reduce((acc,val,idx)=> idx<2 ? acc+=val : acc-=val) * y.sort((a,b)=>a-b).reduce((acc,val,idx)=> idx<2 ? acc+=val : acc-=val) / 4;
    return Math.abs(answer);
}