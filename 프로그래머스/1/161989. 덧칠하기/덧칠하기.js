function solution(n, m, section) {
    var answer = 0;
    var array = [];
    while(section.length > 0){
        let del = section[0]+m-1;
        while(section.length > 0 && section[0] <= del){
        section.splice(0,1);
            
        }
        answer++;
    }
    return answer;
}