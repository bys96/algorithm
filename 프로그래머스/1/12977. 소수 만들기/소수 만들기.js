function solution(nums) {
    var answer = 0;
    let array = [];
    let number = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                number =nums[i]+nums[j]+nums[k];
                // if(array.includes(number)){
                //     continue;
                // }else{
                array.push(number);
                // }
            }
        }
    }
    console.log(array)
    for(let j=0; j<array.length; j++){
        for(let i=2; i<array[j]; i++){
            if(array[j]%i==0){
                break;       
            }else{
                
                if(i==array[j]-1){
                    answer++;
                    continue;
                }
            }
        }
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
    
    return answer;
}