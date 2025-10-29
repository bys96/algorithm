function solution(maps) {
    var answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                let sum = 0;
                const queue = [[i, j]];
                visited[i][j] = true;
                while (queue.length) {
                    const [x, y] = queue.shift();
                    sum += Number(maps[x][y]);
                    for (let d = 0; d < 4; d++) {
                        const nx = x + dx[d];
                        const ny = y + dy[d];
                        if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                            visited[nx][ny] = true;
                            queue.push([nx, ny]);
                        }
                    }
                }
                answer.push(sum);
            }
        }
    }

    if (answer.length === 0) return [-1];
    answer.sort((a, b) => a - b);
    return answer;
}