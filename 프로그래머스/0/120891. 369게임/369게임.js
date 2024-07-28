function solution(order) {
    return order.toString().split("").reduce((acc,idx)=> idx=='3'|| idx=='6' || idx=='9' ? acc+=1 : acc,0);
}