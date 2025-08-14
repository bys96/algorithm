function solution(want, number, discount) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    want.forEach((v,i) => arr1.push( ...Array(number[i]).fill(v)) );
    arr1 = arr1.sort().join();
    
    for(let i=0; i<=discount.length-10; i++){
        if(!want.includes(discount[i])) continue;
        arr2 = discount.slice(i,i+10).sort().join();
        
        if(arr1 == arr2){
            answer++;
        }
    }
    
    return answer;
}