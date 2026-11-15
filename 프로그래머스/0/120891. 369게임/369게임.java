class Solution {
    public int solution(int order) {
        int answer = 0;
        String num = "369";
        String str = Integer.toString(order);
        for(int i=0; i<str.length(); i++){
            if(num.contains(str.charAt(i)+"")){
                answer++;
            }
        }
        return answer;
    }
}