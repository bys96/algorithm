function solution(friends, gifts) {
    var answer = 0;
    let list = gifts.map(v => v.split(" "));
    let obj = friends.reduce((acc,v) => {
        acc[v] = new Array(friends.length).fill(0);
        return acc;
    },{});
    for(let n of list){
        obj[n[0]][friends.indexOf(n[1])]++;
    }
    let cnt = friends.reduce((acc,v) => {
        acc[v] = 0;
        return acc;
    },{});
    
    for(let i=0; i<friends.length; i++){
        for(let j=i+1; j<friends.length; j++){
            if(obj[friends[i]][j] > obj[friends[j]][i]){
                cnt[friends[i]]++;
            }else if(obj[friends[i]][j] < obj[friends[j]][i]){
                cnt[friends[j]]++;
            }else{
                let total1 = obj[friends[i]].reduce((acc1,v1)=>acc1+v1,0) - Object.values(obj).reduce((acc2,v2) => acc2+v2[i],0);
                let total2 = obj[friends[j]].reduce((acc3,v3)=>acc3+v3,0) - Object.values(obj).reduce((acc4,v4)=> acc4+v4[j],0);
                if(total1 > total2){
                    cnt[friends[i]]++;
                }else if(total1 < total2){
                    cnt[friends[j]]++;
                }
            }
        }
    }
    
    answer = Math.max(...Object.values(cnt));
    return answer;
}