function solution(stones, k) {
    var answer = 0;
    let left = 1, right = 0;
    
    for(let s of stones){
        if(s > right) right = s;
    }

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        let fail = false;

        for(let s of stones){
            if(s < mid){
                count++;
                if(count >= k){
                    fail = true;
                    break;
                }
            } else {
                count = 0;
            }
        }

        if(fail){
            right = mid - 1;
        } else {
            answer = mid;
            left = mid + 1;
        }
    }

    return answer;
}