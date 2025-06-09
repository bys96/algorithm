function solution(park, routes) {
    var answer = [0,0];
    let move = {E:[0,1],W:[0,-1],S:[1,0],N:[-1,0]};
    
    for(let i=0; i<park.length; i++){
        if(park[i].includes("S")){
            answer = [i,park[i].indexOf("S")];
            break;
        }
    }
    
    for(let i=0; i<routes.length; i++){
        let temp = [...answer];
        let dir = routes[i][0]
        let valid = true;
        for(let j=0; j<Number(routes[i][2]); j++){
          temp[0] += move[dir][0];
          temp[1] += move[dir][1];
          if(temp[0]<0 || temp[0] >= park.length || temp[1]<0 || temp[1] >= park[0].length || park[temp[0]][temp[1]] == "X"){
              valid = false;
              break;
          }
        }
        if(valid){
            answer = temp;
        }
    }
    return answer;
}