function solution(cacheSize, cities) {
    var answer = 0;
    cities = cities.map(v => v.toLowerCase());
    let arr = [];
    
    if(cacheSize == 0) return cities.length*5;
    
    for(let i=0; i<cities.length; i++){
        if(!arr.includes(cities[i])){
            if(arr.length < cacheSize){
                arr.push(cities[i]);
                answer += 5;
            }else{
                arr.shift();
                arr.push(cities[i]);
                answer += 5;
            }
        }else{
            let c = arr.indexOf(cities[i])
            arr = arr.slice(0,c).concat(arr.slice(c+1,arr.length));
            arr.push(cities[i]);
            answer += 1;
        }
    }
    return answer;
}