def solution(k, tangerine):
    answer = 0
    dic = {}

    for i in tangerine:
        dic[i] = dic.get(i, 0) + 1

    counts = sorted(dic.values(), reverse=True)

    for cnt in counts:
        k -= cnt
        answer += 1

        if k <= 0:
            break

    return answer