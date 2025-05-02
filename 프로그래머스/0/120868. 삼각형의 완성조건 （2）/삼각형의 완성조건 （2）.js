function solution(sides) {
    var answer = 0;
    answer = sides.reduce((acc,val) => acc+val, 0) - Math.abs(sides[0]-sides[1]) -1;
    return answer;
}