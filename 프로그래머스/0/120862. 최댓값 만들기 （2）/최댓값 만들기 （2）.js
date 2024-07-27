function solution(numbers) {
    numbers.sort((a,b)=>a-b);
    return Math.max(numbers[numbers.length-1]*numbers[numbers.length-2],numbers[0]*numbers[1]);;
}