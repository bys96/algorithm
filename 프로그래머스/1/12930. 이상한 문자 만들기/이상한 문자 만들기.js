function solution(s) {
    var answer = '';
    var arr = s.split(" ");
    for(let i=0; i<arr.length;i++){
        for(let j=0; j<arr[i].length; j++){
            if(j%2==0){
                answer += arr[i][j].toUpperCase();
            }else{
                answer += arr[i][j].toLowerCase();
            }
        }
        answer += " ";
    }
    return (answer.slice(0,answer.length-1));
}