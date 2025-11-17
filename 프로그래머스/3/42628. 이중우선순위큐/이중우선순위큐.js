function solution(ops) {
    const minH = [], maxH = [], used = {};
    let id = 0;

    const up = (h, cmp) => {
        let i = h.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (cmp(h[i], h[p])) [h[i], h[p]] = [h[p], h[i]], i = p;
            else break;
        }
    };

    const down = (h, cmp) => {
        let i = 0;
        while (true) {
            let l = i * 2 + 1, r = i * 2 + 2, n = i;
            if (l < h.length && cmp(h[l], h[n])) n = l;
            if (r < h.length && cmp(h[r], h[n])) n = r;
            if (n === i) break;
            [h[i], h[n]] = [h[n], h[i]];
            i = n;
        }
    };

    const clean = (h, cmp) => {
        while (h.length && !used[h[0][1]]) {
            h[0] = h[h.length - 1];
            h.pop();
            down(h, cmp);
        }
    };

    for (let op of ops) {
        const [c, v] = op.split(" ");
        const num = Number(v);

        if (c === "I") {
            used[id] = true;
            minH.push([num, id]); up(minH, (a, b) => a[0] < b[0]);
            maxH.push([num, id]); up(maxH, (a, b) => a[0] > b[0]);
            id++;
        } else if (num === 1) {
            clean(maxH, (a, b) => a[0] > b[0]);
            if (maxH.length) used[maxH[0][1]] = false,
                maxH[0] = maxH.pop() || maxH[0],
                down(maxH, (a, b) => a[0] > b[0]);
        } else {
            clean(minH, (a, b) => a[0] < b[0]);
            if (minH.length) used[minH[0][1]] = false,
                minH[0] = minH.pop() || minH[0],
                down(minH, (a, b) => a[0] < b[0]);
        }
    }

    clean(minH, (a, b) => a[0] < b[0]);
    clean(maxH, (a, b) => a[0] > b[0]);

    if (!minH.length || !maxH.length) return [0, 0];
    return [maxH[0][0], minH[0][0]];
}