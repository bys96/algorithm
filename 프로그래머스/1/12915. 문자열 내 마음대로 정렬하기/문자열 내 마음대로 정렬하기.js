function solution(strings, n) {
strings.sort((a, b) => {
        const charA = a.charAt(n);
        const charB = b.charAt(n);
        
        if (charA !== charB) {
            return charA.localeCompare(charB);
        } else {
            return a.localeCompare(b);
        }
    });

    return strings;
}