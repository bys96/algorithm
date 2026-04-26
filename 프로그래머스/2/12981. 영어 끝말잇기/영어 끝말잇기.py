def solution(n, words):
    answer = [0, 0]
    obj = {}
    arr = []

    for i in range(1, n + 1):
        obj[i] = []

    for i, word in enumerate(words):
        seq = i % n + 1

        # 이미 나온 단어
        if word in arr:
            return [seq, len(obj[seq]) + 1]

        # 끝말잇기 실패
        if i > 0 and words[i - 1][-1] != word[0]:
            return [seq, len(obj[seq]) + 1]

        obj[seq].append(word)
        arr.append(word)

    return answer