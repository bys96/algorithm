function solution(price, money, count) {
    var answer=0;
    if(money - (price*count*(count + 1)/2) >=0){
        return 0;
    }
    answer = Math.abs(money - (price*count*(count + 1)/2));
    

    return answer;
}