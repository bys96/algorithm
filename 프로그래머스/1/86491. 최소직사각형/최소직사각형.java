class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        int r = 0;
        int c = 0;
        
        for(int i=0; i<sizes.length; i++){
            int f = sizes[i][0];
            int s = sizes[i][1];
            
            if(s>f){
                int temp = f;
                f = s;
                s = temp;
            }
            
            if(r<f){
                r = f;
            }
            if(c<s){
                c = s;
            }
        }
        answer = r*c;
        
        return answer;
    }
}