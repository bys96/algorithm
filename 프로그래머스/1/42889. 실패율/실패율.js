function solution(N, stages) {
    var answer = [];
    var obj = {};
    for(let i=0; i<N; i++){
        obj[i+1] = stages.filter(val => val == i+1).length / stages.filter(v => v >= i+1).length;
    }
    let arr = Object.entries(obj).sort(([_1,v1],[_2,v2]) => v2-v1);
    arr.forEach(val => answer.push(Number(val[0])));
    return answer;
}