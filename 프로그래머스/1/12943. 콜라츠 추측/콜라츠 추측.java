class Solution {
    public int solution(int num) {
        long n = num;
        int count = 0;

        while (true) {
            if (n == 1) {
                return count;
            }

            if (count == 500) {
                return -1;
            }

            if (n % 2 == 0) {
                n /= 2;
            } else {
                n = n * 3 + 1;
            }

            count++;
        }
    }
}