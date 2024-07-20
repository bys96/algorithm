function solution(array) {
    array.sort((a,b)=>a-b);
    let answer = array[(array.length)/2-0.5];
    return answer;
}