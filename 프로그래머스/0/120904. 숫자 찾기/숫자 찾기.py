def solution(num, k):
    answer = -1
    string = str(num)
    
    for i in range(len(string)):
        print(string[i])
        if int(string[i]) == k:
            answer = i+1
            break
            
    return answer