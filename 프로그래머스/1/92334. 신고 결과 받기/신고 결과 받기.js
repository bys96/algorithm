function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    let reported = [];
    let arr = {};
    let reportedArr = {};
    
    id_list.forEach(v => arr[v] = []);
    id_list.forEach(v => reportedArr[v] = []);
    
    for(let ab of report){
        let [a,b] = ab.split(" ");
        arr[a].push(b);
        reportedArr[b].push(a)
        arr[a] = [...new Set(arr[a])]
        reportedArr[b] = [... new Set(reportedArr[b])];
    }
    
    for(let id of id_list){
        if(reportedArr[id].length >= k){
            reported.push(id);
        }
    }
    
    for(let name of id_list){
        arr[name].forEach(v => {
            if(reported.includes(v)) answer[id_list.indexOf(name)] +=1; 
        })
    }
    
    return answer;
}