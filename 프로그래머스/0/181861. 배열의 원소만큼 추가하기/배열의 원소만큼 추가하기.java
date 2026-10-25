class Solution {
    public int[] solution(int[] arr) {
        int number = 0;
        for(int i=0; i<arr.length; i++){
            number += arr[i];
        }
        
        int idx = 0;
        int[] answer = new int[number];
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i]; j++){
                answer[idx++] = arr[i];
            }
        }
        
        return answer;
    }
}