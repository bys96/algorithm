import java.util.*;

class Solution {
    public int solution(int[] topping) {
        int answer = 0;

        HashMap<Integer, Integer> right = new HashMap<>();
        HashSet<Integer> left = new HashSet<>();

        // 처음에는 오른쪽이 전부 가지고 있음
        for (int t : topping) {
            right.put(t, right.getOrDefault(t, 0) + 1);
        }

        for (int i = 0; i < topping.length - 1; i++) {
            int t = topping[i];

            // 왼쪽으로 이동
            left.add(t);

            // 오른쪽 개수 감소
            right.put(t, right.get(t) - 1);

            if (right.get(t) == 0) {
                right.remove(t);
            }

            if (left.size() == right.size()) {
                answer++;
            }
        }

        return answer;
    }
}