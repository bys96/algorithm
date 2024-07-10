function solution(a, b) {
    var answer = 0;
    var date = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    var day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    while(a!==1){
        a--;
        answer += date[a];
    }
    answer += b;
    return day[answer%7];
}