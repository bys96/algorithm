function solution(video_len, pos, op_start, op_end, commands) {
    let toSecond = v => {
        let [min,sec] = v.split(":").map(Number);
        let timeToSecond = min*60 + sec;
        return timeToSecond;
    }
    
    let toTime = v => {
        let min = Math.floor(v/60);
        let sec = v%60;
        
        if(min.toString().length == 1) min = "0" + min;
        if(sec.toString().length == 1) sec = "0" + sec;
        
        return `${min}:${sec}`;
    }
    let now = toSecond(pos);
    let check_op = () => {
        if(now >= toSecond(op_start) && now < toSecond(op_end)){
            now = toSecond(op_end);
        }
    }
    check_op();
    
    for(command of commands){
        if(command === "next"){
            if(now+10 <= toSecond(video_len)){
                now += 10;
            }else{
                now = toSecond(video_len);
            }
            
        }else if(command === "prev"){
            if(now-10 >= 0){
                now -= 10;
            }else{
                now = 0;
            }
        }
        
        check_op();
    }
        
     
    return toTime(now);
}