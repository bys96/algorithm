function solution(my_string, m, c) {
    var answer = '';
    let array = [];
    for(let i=0; i<my_string.length; i+=m){
        array.push(my_string.slice(0+i*1,m+i*1));
    }
    console.log(array);
    for(let i=0; i<array.length; i++){
        answer+= array[i][c-1];
    }
    return answer;
}