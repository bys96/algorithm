function solution(p) {
    if (p === '') return '';
    
    const [u, v] = splitUV(p);
    
    if (isCorrect(u)) {
        return u + solution(v);
    } else {
      return '(' + solution(v) + ')' + reverse(u.slice(1, -1));
  }
}

function splitUV(p) {
    let balance = 0;
    let i = 0;
    for (; i < p.length; i++) {
        p[i] === '(' ? balance++ : balance--;
        if (balance === 0) break;
    }
    return [p.slice(0, i + 1), p.slice(i + 1)];
}

function isCorrect(p) {
    let balance = 0;
    for (let ch of p) {
        ch === '(' ? balance++ : balance--;
        if (balance < 0) return false;
    }
    return balance === 0;
}

function reverse(p) {
    return [...p].map(ch => (ch === '(' ? ')' : '(')).join('');
}
