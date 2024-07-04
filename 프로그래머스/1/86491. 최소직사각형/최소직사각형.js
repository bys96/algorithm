function solution(sizes) {
    var fir = [];
    var sec = [];
    for(let i=0; i<sizes.length;i++){
        if(sizes[i][0]<sizes[i][1]){
            fir.push(sizes[i][1]);
            sec.push(sizes[i][0]);
        }
        else{
            fir.push(sizes[i][0]);
            sec.push(sizes[i][1]);
        }
    }
    let answer = Math.max(...fir)*Math.max(...sec);
    return answer;
}