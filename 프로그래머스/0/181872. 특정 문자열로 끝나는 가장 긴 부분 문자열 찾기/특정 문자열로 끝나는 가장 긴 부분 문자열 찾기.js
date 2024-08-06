function solution(myString, pat) {
    let idx = 0;
    for(let i=0; i<myString.length; i++){
        if(myString.slice(i,i + pat.length) == pat){
            idx = i;
        }
    }
    return myString.slice(0,idx + pat.length);
}