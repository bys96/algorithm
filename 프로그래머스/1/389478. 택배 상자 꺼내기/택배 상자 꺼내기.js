function solution(n, w, num) {
    var answer = 0;
    let dir = 1;
    let arr = new Array(w).fill().map(()=>[]);
    let j = 0;
    for(let i = 1; i<=n; i++){
        if(dir == 1){
            arr[j].push(i);
            j++;
            if(j >= w){
                j%=w;
                dir = -1;
            }
        }else{
            arr[w-j-1].push(i);
            j++;
            if(j >= w){
                j%=w;
                dir = 1;
            }
        }
    }
    for(let a of arr){
        if(a.indexOf(num) != -1){
            answer = a.length - a.indexOf(num);
            break;
        }
    }
    return answer;
}