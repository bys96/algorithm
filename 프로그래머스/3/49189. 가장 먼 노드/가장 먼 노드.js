function solution(n, vertex) {
    
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const distance = Array(n + 1).fill(-1);
    distance[1] = 0;

    const queue = [1];

    while (queue.length) {
        const now = queue.shift();

        for (const next of graph[now]) {
            if (distance[next] === -1) {
                distance[next] = distance[now] + 1;
                queue.push(next);
            }
        }
    }

    const maxDist = Math.max(...distance);
    return distance.filter(d => d === maxDist).length;
}
