function solution(picture, k) {
    var answer = [];
    var text = "";
    for(let i=0; i<picture.length; i++){
        for(let j=0; j<picture[i].length; j++){
            text += picture[i][j].repeat(k);
        }
        answer.push(...Array(k).fill(text));
        text = "";
    }
    return answer;
}