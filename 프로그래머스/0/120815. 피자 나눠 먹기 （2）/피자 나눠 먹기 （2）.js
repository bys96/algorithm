function solution(n) {
    var answer = 0;
    let a = 0;
    let array = [1,2,3,6];
    for(let i=array.length-1; i>=0; i--){
        if(n%array[i]==0){
             a = array[i];
            break;
        }
    }
    answer = n/a;
    return answer;
}