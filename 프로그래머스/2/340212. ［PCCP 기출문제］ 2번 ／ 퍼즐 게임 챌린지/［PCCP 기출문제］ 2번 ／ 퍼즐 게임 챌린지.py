def solution(diffs, times, limit):
    
    def can(level):
        total = 0
        
        for i in range(len(diffs)):
            if diffs[i] <= level:
                total += times[i]
            else:
                fail = diffs[i] - level
                prev = times[i-1] if i > 0 else 0
                total += fail * (times[i] + prev) + times[i]
            
            if total > limit:
                return False
        
        return True

    left = 1
    right = max(diffs)
    answer = right

    while left <= right:
        mid = (left + right) // 2
        
        if can(mid):
            answer = mid
            right = mid - 1
        else:
            left = mid + 1

    return answer