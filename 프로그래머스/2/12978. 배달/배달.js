function solution(N, road, K) {
    var answer = 0;
    let graph = Array.from({length: N + 1}, () => []);
    for (let [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }

    let dist = Array(N + 1).fill(Infinity);
    dist[1] = 0;
    let queue = [[1, 0]];

    while (queue.length) {
        queue.sort((a,b) => a[1] - b[1]);
        let [node, cost] = queue.shift();
        if (dist[node] < cost) continue;

        for (let [next, w] of graph[node]) {
            let nextCost = cost + w;
            if (nextCost < dist[next]) {
                dist[next] = nextCost;
                queue.push([next, nextCost]);
            }
        }
    }

    for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) answer++;
    }

    return answer;
}
