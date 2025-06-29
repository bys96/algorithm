function solution(babbling) {
    var answer = 0;
    
    for(let word of babbling){
        if(word.split("aya").join(" ").split("ye").join(" ").split("woo").join(" ").split("ma").join(" ").trim() === "") answer++; 
    }
    
    return answer;
}