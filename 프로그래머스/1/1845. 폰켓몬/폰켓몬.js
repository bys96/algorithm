function solution(nums) {
    var answer = 0;
    var a = new Set(nums);
    if((nums.length)/2 >= a.size){
        answer = a.size;
    }else{
        answer = nums.length / 2;
    }
    return answer;
}