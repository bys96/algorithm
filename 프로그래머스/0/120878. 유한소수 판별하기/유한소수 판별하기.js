function solution(a, b) {
    var answer = 0;
    let gcd = ((a,b) => b == 0 ? a : gcd(b,a%b));
    let num = b/gcd(a,b);
    
    while(num%2 == 0) num /= 2;
    while(num%5 == 0) num /= 5;
    
    return num == 1 ? 1 : 2;
}