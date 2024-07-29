function solution(a, b, c) {
    var answer = a==b&&b==c ? (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3) : a!=b && b!=c && a!=c? a+b+c : (a+b+c)*(a**2+b**2+c**2);
    return answer;
}