class Solution {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split(" ");
        int max = Integer.parseInt(arr[0]);
        int min = Integer.parseInt(arr[0]);
        
        for(int i=0; i<arr.length; i++){
            int num = Integer.parseInt(arr[i]);
            
            if(num>max) max = num;
            if(num<min) min = num;
        }
        
        answer = Integer.toString(min) + " " + Integer.toString(max);
        
        return answer;
    }
}