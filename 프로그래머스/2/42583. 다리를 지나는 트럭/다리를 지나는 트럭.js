function solution(bridge_length, weight, truck_weights) {
    let queue = [];
    let idx = 0;
    let time = 0;
    
    while(truck_weights.length > 0 || queue.length > 0){
        time++;
        
        let len = queue.length
        if(len){
            for(let i=0; i<len; i++){
                let [a,b] = queue.shift();
                b+=1;
                if(b >= bridge_length){
                    weight+=a;
                }else{
                    queue.push([a,b])
                }
            }
        }
        
        if(truck_weights.length > 0 && weight-truck_weights[0] >= 0){
            let t = truck_weights.shift();
            queue.push([t,0]);
            weight -= t;
        }
    }
    
    return time;
}