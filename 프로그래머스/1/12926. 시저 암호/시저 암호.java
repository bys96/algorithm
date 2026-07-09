class Solution {
    public String solution(String s, int n) {
        String answer = "";

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            // 공백은 그대로
            if (c == ' ') {
                answer += c;
            }
            // 대문자
            else if (c >= 'A' && c <= 'Z') {
                if (c + n > 'Z') {
                    answer += (char)(c + n - 26);
                } else {
                    answer += (char)(c + n);
                }
            }
            // 소문자
            else if (c >= 'a' && c <= 'z') {
                if (c + n > 'z') {
                    answer += (char)(c + n - 26);
                } else {
                    answer += (char)(c + n);
                }
            }
        }

        return answer;
    }
}