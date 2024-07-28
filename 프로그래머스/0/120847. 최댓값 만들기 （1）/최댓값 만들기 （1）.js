function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers.reduce((acc,idx) => numbers.indexOf(idx)<=1 ? acc = idx*acc : acc, 1);
}