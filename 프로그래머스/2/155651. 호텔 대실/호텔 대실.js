function solution(book_time) {
    var answer = 0;
    let arr = [];
    let endTime = [];
    for(let i=0; i<book_time.length; i++){
        let start=0 ,end=0;
        let [s,e] = book_time[i];
        let [h1,m1] = s.split(":").map(Number);
        start = h1*60 + m1;
        let [h2,m2] = e.split(":").map(Number);
        end = h2*60 + m2;
        arr.push([start,end]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    
    for(let i=0; i<arr.length; i++){
        let [s,e] = arr[i];
        endTime = endTime.filter(v => v+10 > s);
        endTime.push(e);
        answer = Math.max(answer,endTime.length);
    }
    
    return answer;
}