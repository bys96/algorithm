function solution(answers) {
    var answer = [];
    let arr1 = [1,2,3,4,5];
    let count1 = 0;
    let arr2 = [2,1,2,3,2,4,2,5];
    let count2 = 0;
    let arr3 = [3,3,1,1,2,2,4,4,5,5];
    let count3 = 0;
    
    for(let i=0; i<answers.length; i++){
        if(answers[i] == arr1[i%arr1.length]){
            count1 +=1;
        }
        if(answers[i] == arr2[i%arr2.length]){
            count2 +=1;
        }
        if(answers[i] == arr3[i%arr3.length]){
            count3 +=1;
        }
    }
    
    let maxcount = Math.max(count1, count2, count3);
    
    if(maxcount==count1){
        answer.push(1);
    }
    if(maxcount==count2){
        answer.push(2);
    }
    if(maxcount==count3){
        answer.push(3);
    }
    
    return answer;
}