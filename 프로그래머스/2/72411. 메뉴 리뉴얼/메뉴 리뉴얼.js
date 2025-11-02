function solution(orders, course) {
    var answer = [];
    let dic = {};
    
    function getCombinations(arr, select) {
        if (select === 1) return arr.map(v => [v]);
        const result = [];
        arr.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const combis = getCombinations(rest, select - 1);
            const attached = combis.map(c => [fixed, ...c]);
            result.push(...attached);
        });

        return result;
    }
    
    for (let order of orders) {
        let arr = order.split("").sort();

        for (let n of course) {
            if (arr.length < n) continue;
            
            let combis = getCombinations(arr, n);
            for (let c of combis) {
                const key = c.join("");
                dic[key] = (dic[key] || 0) + 1;
            }
        }
    }
    
    for (let n of course) {
        let temp = Object.entries(dic).filter(([k, v]) => k.length === n && v >= 2);
        if (temp.length === 0) continue;
        
        let max = Math.max(...temp.map(([_, v]) => v));
        
        temp.forEach(([k, v]) => {
            if (v === max) answer.push(k);
        });
    }
    
    return answer.sort();
}
