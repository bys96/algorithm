function solution(id_pw, db) {
    let obj = {}
    db.forEach((val) => obj[val[0]]=val[1]);
    if(obj[id_pw[0]]){
        if(obj[id_pw[0]] == id_pw[1]){
            return "login";
        }else{
            return "wrong pw";
        }
    }
    return "fail";
}