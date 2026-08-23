class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];

        for (int i = 0; i < targets.length; i++) {
            int total = 0;

            for (int j = 0; j < targets[i].length(); j++) {
                char target = targets[i].charAt(j);
                int min = Integer.MAX_VALUE;

                for (int k = 0; k < keymap.length; k++) {
                    for (int l = 0; l < keymap[k].length(); l++) {

                        if (keymap[k].charAt(l) == target) {
                            min = Math.min(min, l + 1);
                            break;
                        }

                    }
                }
                if (min == Integer.MAX_VALUE) {
                    total = -1;
                    break;
                }
                total += min;
            }
            answer[i] = total;
        }
        return answer;
    }
}