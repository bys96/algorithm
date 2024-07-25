function solution(lottos, win_nums) {
    var count = 0;
    var num = 0;
    var min = 0;
    var max = 0;
    var answer = [];
    var a = {6:1,5:2,4:3,3:4,2:5,1:6,0:6};
    for(let i=0; i<lottos.length; i++){
        if(lottos[i] == 0){
            count++;
        }else{
            if(win_nums.includes(lottos[i])){
                num++;
            }
        }
    }
    min = num;
    max = num+count;
    console.log(num);
    console.log(count);
    answer.push(a[max]);
    answer.push(a[min]);
    return answer;
}