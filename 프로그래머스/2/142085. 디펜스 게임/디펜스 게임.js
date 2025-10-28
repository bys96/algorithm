function solution(n, k, enemy) {
    var answer = 0;
    const heap = [];

    function pushHeap(val) {
        heap.push(val);
        let idx = heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (heap[parent] <= heap[idx]) break;
            [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
            idx = parent;
        }
    }

    function popHeap() {
        const last = heap.pop();
        if (heap.length === 0) return last;
        const ret = heap[0];
        heap[0] = last;
        let idx = 0;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;
            if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
            if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
            if (smallest === idx) break;
            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
            idx = smallest;
        }
        return ret;
    }

    for (let i = 0; i < enemy.length; i++) {
        pushHeap(enemy[i]);
        if (heap.length > k) n -= popHeap();
        if (n < 0) return answer;
        answer++;
    }

    return answer;
}