import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

class Solution {
    public String solution(int a, int b) {
        String answer = "";
        String[] arr = {"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"};

        LocalDate start = LocalDate.of(2016, 1, 1);
        LocalDate end = LocalDate.of(2016, a, b);

        int days = (int) ChronoUnit.DAYS.between(start, end);

        answer = arr[days % arr.length];

        return answer;
    }
}