def solution(n):
    answer = 0
    
    for i in range(1,n+1):
        sum = 0
        j = i
        while(True):
            sum += j
            j+=1
            if sum == n:
                answer += 1
                break
            if sum > n:
                break
    
    return answer