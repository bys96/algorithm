function solution(people, limit) {
    var answer = 0;
    let min = 0;
    let max = people.length-1;
    people = people.sort((a,b)=>a-b);
    
    while(min <= max){
        
            if(people[min]+people[max] > limit){
                max--;
                answer++;
            }else{
                min++;
                max--;
                answer++;
            }
        
    }
    
    return answer;
}