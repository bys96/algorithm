function solution(quiz) {
    var answer = [];
    let a = []
    for(b of quiz){
        a = b.split(" ");
        if(a[1] == "+"){
            Number(a[0])+Number(a[2]) == Number(a[4]) ? answer.push("O") : answer.push("X");
        }else if(a[1] == "-"){
            Number(a[0])-Number(a[2]) == Number(a[4]) ? answer.push("O") : answer.push("X");
        }
    }
    return answer;
}