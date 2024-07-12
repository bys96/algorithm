function solution(number, limit, power) {
    var answer = 0;
    var measureArray=[];
    var array = [];
    var measure = 0;
    
    for(let j=1; j<=number; j++){
        measure = 0;
        for(let i=1; i<=Math.floor(j**0.5); i++){
            if(j%i == 0){
                measure += 2;
            }
        }
        if((Math.floor(j**0.5))**2 == j){
            array.push(measure-1);
        }else{
            array.push(measure);
        }
        
    }
        console.log(array)
    array = array.map(item => item>limit ? power : item);
    answer = array.reduce((a,b)=> a+b,0);
    
    return answer;
}