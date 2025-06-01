function solution(ingredient) {
    var answer = 0;
    let ham = [];
    
    for(let i=0; i<ingredient.length; i++){
        ham.push(ingredient[i]);
        if(ham.length >=4 && ham[ham.length-1]==1 && ham[ham.length-2]==3 && ham[ham.length-3]==2 && ham[ham.length-4]==1)
        {
            ham.splice(-4,4);
            answer++;
        }
    }
    return answer;
}