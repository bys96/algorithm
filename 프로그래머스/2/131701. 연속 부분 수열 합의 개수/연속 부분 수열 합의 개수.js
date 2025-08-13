function solution(elements) {
    var answer = 0;
    let arr = [];
    elements = [...elements,  ...elements];
    for(let i = 1; i<=elements.length/2; i++){
        for(let j=0; j<elements.length/2; j++){
            arr.push(elements.slice(j,j+i).reduce((acc,v)=>acc+v,0));
        }
    }
    let set = new Set(arr);
    answer = set.size;
    
    
    return answer;
}