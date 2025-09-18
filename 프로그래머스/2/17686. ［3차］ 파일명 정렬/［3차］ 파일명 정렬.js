function solution(files) {
    var answer = [];
    let arr = [];
    
    for(let idx=0; idx<files.length; idx++){
        let file = files[idx];
        let s = 0;
        let f = 0;
        let bool = false;
        let numLength = 0;
        
        for(let i=0; i<file.length; i++){
            let c = file[i];
            
            if(c>="0" && c<="9" && !bool){
                s = i;
                bool = true;
                numLength = 1;
            }else if(c>="0" && c<="9" && bool){
                numLength++;
                if(numLength == 5) {
                    f = i+1;
                    break;
                }
            }else if((c<"0" || c>"9") && bool){
                f = i;
                bool = false;
                break;
            }
            
            if(i==file.length-1 && bool){
                f = i+1;
            }
        }
        
        arr.push([file,file.slice(0,s),file.slice(s,f),file.slice(f),idx]);
    }
    
    arr.sort((a,b) => {
        let diff = a[1].toLowerCase().localeCompare(b[1].toLowerCase());
        if(diff !== 0) return diff;
        
        diff = Number(a[2])-Number(b[2]);
        if(diff !== 0) return diff;
        
        return a[4]-b[4];
    });
    
    answer = arr.map(v => v[0]);
    
    return answer;
}