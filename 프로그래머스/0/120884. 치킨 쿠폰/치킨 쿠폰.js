function solution(chicken) {
    var answer = 0;
    let coupon = 0;
    while(chicken >= 10){
        coupon += Math.floor(chicken/10);
        chicken = coupon + chicken%10;
        answer += coupon;
        coupon = 0;
    }
    return answer;
}