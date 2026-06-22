class Solution {
    public long solution(long n) {
        char[] arr = String.valueOf(n).toCharArray();

        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    char temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return Long.parseLong(new String(arr));
    }
}