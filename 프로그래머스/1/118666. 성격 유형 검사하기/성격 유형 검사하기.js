function solution(survey, choices) {
    var answer = '';
    let obj = {"R":0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0, "N":0}
    let pairs = ["RT","CF","JM","AN"];
    for(let i=0; i<survey.length; i++){
        let a = survey[i][0];
        let b = survey[i][1];
        
        switch(choices[i]){
            case 1:
                obj[a]+=3;
                break;
            case 2:
                obj[a]+=2;
                break;
            case 3:
                obj[a]+=1;
                break;
            case 4:
                break;
            case 5:
                obj[b]+=1;
                break;
            case 6:
                obj[b]+=2;
                break;
            case 7:
                obj[b]+=3;
        }
    }
    
    for(let pair of pairs){
        let [fir,sec] = pair;
        if(obj[fir] >= obj[sec]){
            answer+=fir;
        }else{
            answer+=sec;
        }
    }
    
    return answer;
}