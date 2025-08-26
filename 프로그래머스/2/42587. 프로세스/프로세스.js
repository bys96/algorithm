function solution(priorities, location) {
    var answer = 0;
    let arr = priorities.slice().sort((a,b)=>b-a);
    let n = 0;
    
    while(priorities.length > 0){
        let f = priorities[0];
        if(f < arr[n]){
            priorities.push(f);
            priorities.shift();
            if(location == 0){
                location = priorities.length-1;
            }else{
                location -=1;
            }
        }else{
            answer+=1;
            if(location == 0){
                return answer;
            }
            priorities.shift();
            n+=1;
            location-=1;
        }
    }
}