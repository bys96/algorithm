function solution(players, m, k) {
    var answer = 0;
    let server = new Array(players.length).fill(0);
    
    for(let i=0; i<players.length; i++){
        let needServer = Math.floor(players[i]/m);
        if(server[i] < needServer){
            let plusServer = needServer-server[i];
            for(let j=i; j<Math.min(i+k,players.length); j++){
                server[j] += plusServer;
            }
            answer += plusServer;
        }
    }
    return answer;
}