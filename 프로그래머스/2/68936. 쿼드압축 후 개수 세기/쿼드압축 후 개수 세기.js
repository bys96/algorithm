function solution(arr) {
    var answer = [0,0];
    
    function fun(x,y,size){
        let num = arr[y][x];
        let bool = true;
        
        for(let i=y; i<y+size; i++){
            for(let j=x; j<x+size; j++){
                if(arr[i][j] != num){
                    bool = false;
                    break;
                }
            }
        }
        
        if(bool && num == 0) answer[0]++;
        else if(bool && num == 1) answer[1]++;
        else{
            let half = size/2;
            
            fun(x,y,half);
            fun(x+half,y,half);
            fun(x,y+half,half);
            fun(x+half,y+half,half);
        }
    }
    
    fun(0,0,arr.length);
    
    return answer;
}