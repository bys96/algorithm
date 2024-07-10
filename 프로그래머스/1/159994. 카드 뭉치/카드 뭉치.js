function solution(cards1, cards2, goal) {
    var answer = '';
    var test = [];
    for(let i=0; i<goal.length ; i++){
        if(cards1[0] == goal[i]){
            test.push(cards1[0]);
            cards1.splice(0,1);
        }else if(cards2[0] == goal[i]){
            test.push(cards2[0]);
            cards2.splice(0,1);
            console.log(cards2);
        }else{
            if(test == goal){
                console.log(test);
                return "Yes";
            }else{
                console.log(test);
            return "No";
            }
        }
    }
    return "Yes";
}