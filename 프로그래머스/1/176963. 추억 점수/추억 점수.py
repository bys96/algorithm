def solution(name, yearning, photo):
    answer = []
    obj = {}
    for i in range(len(name)):
        obj[name[i]] = yearning[i]
    
    for i in photo:
        score = 0
        for j in i:
            if j in obj:
                score += obj[j]
        answer.append(score)
        
    return answer