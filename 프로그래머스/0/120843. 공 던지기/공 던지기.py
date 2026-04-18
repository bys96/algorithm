def solution(numbers, k):
    answer = 0
    leng = len(numbers)
    idx = (k-1)*2 % leng
    answer = numbers[idx]
    return answer