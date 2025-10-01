function solution(record) {
    var answer = [];
    let arr = [];
    let nicknames = {};
    
    for(let r of record){
        let [event,id,name] = r.split(" ");
        if(event == "Enter" || event == "Change"){
            nicknames[id] = name;
        }
        arr.push([id,event]);
    }
    
    for(let [i,e] of arr){
        if(e == "Enter"){
            answer.push(nicknames[i]+"님이 들어왔습니다.");
        }else if(e == "Leave"){
            answer.push(nicknames[i]+"님이 나갔습니다.");
        }
    }

    return answer;
}