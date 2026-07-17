import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {

        Set<String> set = new HashSet<>();
        set.add(words[0]);

        for (int i = 1; i < words.length; i++) {

            String prev = words[i - 1];
            String cur = words[i];

            if (set.contains(cur)
                    || prev.charAt(prev.length() - 1) != cur.charAt(0)) {

                return new int[]{
                        (i % n) + 1,
                        (i / n) + 1
                };
            }

            set.add(cur);
        }

        return new int[]{0, 0};
    }
}