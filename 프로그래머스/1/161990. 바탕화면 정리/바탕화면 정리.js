function solution(wallpaper) {
    var answer = [];
    let point = [];
    wallpaper.forEach((v,i)=> v.split("").forEach((val,idx)=> {
        if(val == "#"){
            point.push([i,idx]);
        }
    } ) );
    let idx0 = point.map(v => v[0]);
    let idx1 = point.map(v => v[1]);
    answer = [Math.min(...idx0),Math.min(...idx1),Math.max(...idx0)+1,Math.max(...idx1)+1];
    return answer;
}