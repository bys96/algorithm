function solution(players, callings) {
    let m = {};
    players.forEach((v,i)=> m[v] = i);
    for(let v of callings){
        let a = m[v];
        let b = a - 1;
        let c = players[b];
        [players[b], players[a]] = [players[a], players[b]];
        m[v] = b;
        m[c] = a;
    }
    return players;
}