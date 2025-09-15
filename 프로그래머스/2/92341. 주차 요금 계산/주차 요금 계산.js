function solution(fees, records) {
    var answer = [];
    let obj = {};
    
    function timeToMin(time){
        let [hour,min] = time.split(":");
        return Number(hour)*60 + Number(min);
    }
    
    for(let record of records){
        let [time,num,inOut] = record.split(" ");
        obj[num] ? obj[num].push(timeToMin(time)) : obj[num] = [timeToMin(time)];
    }
    
    for(let key of Object.keys(obj).sort()){
        if(obj[key].length % 2 == 1) obj[key].push(timeToMin("23:59"));
        
        let sum = 0;
        let totalPrice=0;
        for(let i=0; i<obj[key].length; i+=2){
            let t = obj[key][i+1]-obj[key][i];
            sum+=t;
        }
        totalPrice+=fees[1];
        if(sum > fees[0]){
            totalPrice+=Math.ceil((sum-fees[0])/fees[2])*fees[3];
        }
    answer.push(totalPrice);
    }
    return answer;
}