function solution(sequence, k) {
    var answer = [0,sequence.length];
    let start = 0;
    let end = 0;
    let sum = sequence[0];

    while (start < sequence.length && end < sequence.length) {
        if (sum === k) {
            if ((end - start) < (answer[1] - answer[0])) {
                answer = [start, end];
            }
            sum -= sequence[start++];
        } else if (sum < k) {
            end++;
            if (end < sequence.length) sum += sequence[end];
        } else {
            sum -= sequence[start++];
        }
    }

    return answer;
}