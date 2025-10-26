function solution(board) {
    var answer = 0;
    let n = board.length;
    let m = board[0].length;
    let start, goal;
    
    board = board.map(row => row.split(''));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') goal = [i, j];
        }
    }

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let visited = Array.from(Array(n), () => Array(m).fill(false));
    let queue = [[start[0], start[1], 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        let [x, y, cnt] = queue.shift();

        if (x === goal[0] && y === goal[1]) {
            answer = cnt;
            return answer;
        }

        for (let d = 0; d < 4; d++) {
            let nx = x;
            let ny = y;

            while (true) {
                let nextX = nx + dx[d];
                let nextY = ny + dy[d];

                if (
                    nextX < 0 || nextX >= n ||
                    nextY < 0 || nextY >= m ||
                    board[nextX][nextY] === 'D'
                ) break;

                nx = nextX;
                ny = nextY;
            }

            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, cnt + 1]);
            }
        }
    }

    answer = -1;
    return answer;
}
