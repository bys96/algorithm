function solution(arr) {
    return arr.reduce((acc,val) => lcm(acc,val));
}

function gcd(a,b) {
    return b===0 ? a : gcd(b,a%b);
}

function lcm(a,b) {
    return (a*b)/gcd(a,b);
}