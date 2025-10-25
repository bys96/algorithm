function solution(n) {
    let answer = '';
    const nums = [4,1,2];

    while(n>0){
        let remainder = n%3;
        n = Math.floor(n/3);

        if(remainder==0) n--;

        answer=nums[remainder]+answer;
    }

    return answer;
}
