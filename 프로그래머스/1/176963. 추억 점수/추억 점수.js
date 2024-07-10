function solution(name, yearning, photo) {
    var answer = [];
    var obj = {};
    for(let i=0; i< yearning.length ; i++){
        obj[name[i]] = yearning[i];
    }
    console.log(obj);
    for(let i=0; i<photo.length; i++){
        let num = 0;
        for(let j=0; j<photo[i].length; j++){
            if(Object.keys(obj).includes( photo[i][j])){
                num += obj[photo[i][j]];
            }
            
        }
        answer.push(num);
    }
    return answer;
}