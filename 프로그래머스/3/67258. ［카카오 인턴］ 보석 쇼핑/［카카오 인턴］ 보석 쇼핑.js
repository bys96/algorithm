function solution(gems) {
    var answer = [];
    const gemTypes = new Set(gems).size;
    const map = new Map();
    answer = [1, gems.length];
    let left = 0;

    for (let right = 0; right < gems.length; right++) {
        map.set(gems[right], (map.get(gems[right]) || 0) + 1);
        
        while (map.size === gemTypes) {
            if (right - left < answer[1] - answer[0])
                answer = [left + 1, right + 1];
            
            map.set(gems[left], map.get(gems[left]) - 1);
            if (map.get(gems[left]) === 0) map.delete(gems[left]);
            left++;
        }
    }
    
    return answer;
}
