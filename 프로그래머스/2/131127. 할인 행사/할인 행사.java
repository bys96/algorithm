class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;

        for(int i = 0; i < discount.length - 9; i++){
            int[] num = number.clone();
            boolean possible = true;

            for(int j = i; j < i + 10; j++){
                for(int k = 0; k < want.length; k++){
                    if(discount[j].equals(want[k])){
                        num[k]--;
                        break;
                    }
                }
            }

            for(int k = 0; k < num.length; k++){
                if(num[k] != 0){
                    possible = false;
                    break;
                }
            }

            if(possible){
                answer++;
            }
        }

        return answer;
    }
}