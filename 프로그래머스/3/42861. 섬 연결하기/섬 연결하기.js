function solution(n, costs) {
  let answer = 0;
  costs.sort((a,b) => a[2]-b[2]);
  
  let connected = new Set([costs[0][0]]);

  while (connected.size < n) {
    for (let [s, e, c] of costs) {
      if (connected.has(s) && !connected.has(e)) {
        connected.add(e);
        answer += c;
        break;
      }
      if (connected.has(e) && !connected.has(s)) {
        connected.add(s);
        answer += c;
        break;
      }
    }
  }
  return answer;
}
