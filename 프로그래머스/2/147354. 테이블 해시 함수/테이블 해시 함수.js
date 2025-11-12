function solution(data, col, row_begin, row_end) {
    var answer = 0;
    
    data.sort((a,b) => {
        if(a[col-1] == b[col-1]) return b[0]-a[0];
        else return a[col-1]-b[col-1];
    })
    
    for(let i=row_begin; i<=row_end; i++){
        let row = data[i-1];
        
        let sum = row.reduce((acc,v) => acc+(v%i) ,0);
        answer ^= sum;
        
    }
    
    return answer;
}