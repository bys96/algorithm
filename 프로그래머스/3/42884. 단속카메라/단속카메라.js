function solution(routes) {
    var answer = 0;
    let camera = -30001;
    
    routes.sort((a,b)=>a[1]-b[1]);
    
    for(let [s,e] of routes){
        if(s > camera){
            answer++;
            camera = e;
        }
    }
    
    return answer;
}