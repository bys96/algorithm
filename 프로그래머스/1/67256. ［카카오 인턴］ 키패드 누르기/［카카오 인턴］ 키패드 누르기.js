function solution(numbers, hand) {
    let left = [1,4,7,11];
    let right = [3,6,9,12];
    let middle = [2,5,8,11];
    let l = 10;
    let r = 12;
    let answer = '';
    numbers = numbers.map(v => v==0 ? 11 : v);
    
    for(let i=0; i<numbers.length; i++){
        if(middle.includes(numbers[i])){
            let lnum = Math.abs(numbers[i]-l);
            let rnum = Math.abs(numbers[i]-r);
            if( Math.floor(lnum/3) + lnum%3 > Math.floor(rnum/3) + rnum%3){
                r = numbers[i];
                answer += "R";
            }else if(Math.floor(lnum/3) + lnum%3 < Math.floor(rnum/3) + rnum%3){
                l = numbers[i];
                answer += "L";
            }else{
                if(hand == "left"){
                    l = numbers[i];
                    answer += "L";
                }else{
                    r = numbers[i];
                    answer += "R";
                }
            }
        }else if(left.includes(numbers[i])){
            l = numbers[i];
            answer += "L";
        }else if(right.includes(numbers[i])){
            r = numbers[i];
            answer += "R";
        }
    }
    return answer;
}