function solution(skill, skill_trees) {
    var answer = 0;
    let dic = {};
    for(let s=0; s<skill.length; s++){
        dic[skill[s]]=s;
    }
    let sc=0;
    
    console.log(dic);
    for(let skills of skill_trees){
        sc = 0;
        for(let c of skills){
            if(dic[c] != undefined){
                if(dic[c]==sc){
                    sc++;
                }else{
                    sc = -1;
                    break;
                }
            }
        }
        if(sc != -1) answer++;
    }
    
    return answer;
}