function solution(sides) {
    sides.sort();
    
    return sides[2]<sides[0]+sides[1] ? 1 : 2;
}