function solution(schedules, timelogs, startday) {
    var answer = schedules.length;
    let arr = [];
    let time = schedules.map(v => (v+10)%100 >=60 ? v+50 : v+10);
    
    for(let i=0; i<timelogs.length; i++){
            if(timelogs[i].find((t,d) => (startday+d)%7 !==6 && (startday+d)%7 !==0 && t > time[i])){
                answer -= 1;
                
        }
    }
    return answer;
}