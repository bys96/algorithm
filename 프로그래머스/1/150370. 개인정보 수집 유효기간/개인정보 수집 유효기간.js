function solution(today, terms, privacies) {
    var answer = [];
    let obj = {};
    let [y,m,d] = today.split(".").map(Number);
    
    for(let i=0; i<terms.length; i++){
        let arr = terms[i].split(" ");
        obj[arr[0]]=Number(arr[1]);
    }
    
    for(let i=0; i<privacies.length; i++){
        let term = privacies[i].split(" ")[1];
        let [y1,m1,d1] = privacies[i].split(" ")[0].split(".").map(Number);
        
        m1 += obj[term];
        y1 += Math.floor((m1 - 1) / 12);
        m1 = ((m1 - 1) % 12) + 1;
        
        d1 -= 1;
        if(d1 === 0){
            d1 = 28;
            m1 -= 1;
            if(m1 ===0){
                m1 = 12;
                y1 -= 1
            }
        }
        
        if(y > y1 || (y === y1 && m > m1) || (y === y1 && m === m1 && d > d1)) answer.push(i+1);
    }
    
    return answer;
}