function solution(date1, date2) {
    var answer = 0;
    let cal1 = new Date(...date1);
    let cal2 = new Date(...date2);
    if(cal1 < cal2){
        answer = 1;
    }
    return answer;
}