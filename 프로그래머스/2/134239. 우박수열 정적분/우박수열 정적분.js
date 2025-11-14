function solution(k, ranges) {
    var answer = [];
    
    let arr = [k];
    while (k > 1) {
        k = k % 2 === 0 ? k / 2 : k * 3 + 1;
        arr.push(k);
    }

    let areas = [];
    for (let i = 0; i < arr.length - 1; i++) {
        areas.push((arr[i] + arr[i+1]) / 2);
    }

    let prefix = [0];
    for (let i = 0; i < areas.length; i++) {
        prefix.push(prefix[prefix.length - 1] + areas[i]);
    }

    let n = areas.length;

    for (let [a, b] of ranges) {
        let end = n + b;
        if (a > end) {
            answer.push(-1);
        } else {
            answer.push(prefix[end] - prefix[a]);
        }
    }

    return answer;
}