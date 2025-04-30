function solution(numbers) {
    var answer = '';
    var num = ''
    let numarray = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    for(let i=0; i<numbers.length; i++){
        num = num + numbers[i];
        if(numarray.includes(num)){
            answer += numarray.indexOf(num).toString();
            num = '';
        }
    }
    
    return parseInt(answer);
}