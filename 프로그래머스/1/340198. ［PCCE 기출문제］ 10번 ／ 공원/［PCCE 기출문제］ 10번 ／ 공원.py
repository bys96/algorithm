def solution(mats, park):
    answer = -1
    col = len(park)
    row = len(park[0])
    dp = [];
    
    for i in range(col):
        arr = []
        for j in range(row):
            arr.append(0)
        dp.append(arr)
    
    for i in range(col):
        for j in range(row):
            if park[i][j] == "-1":
                if i == 0 or j == 0:
                    dp[i][j] = 1
                else:
                    dp[i][j] = min(
                        dp[i-1][j],
                        dp[i][j-1],
                        dp[i-1][j-1]
                    ) + 1
            else:
                dp[i][j] = 0
    
    max_size = 0
    for i in range(col):
        for j in range(row):
            if dp[i][j] > max_size:
                max_size = dp[i][j]
    
    mats.sort(reverse=True)
    
    for k in mats:
        if k <= max_size:
            answer = k
            break
    
    return answer