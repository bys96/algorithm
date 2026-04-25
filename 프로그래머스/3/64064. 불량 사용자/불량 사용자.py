from itertools import permutations

def match(u, b):
    if len(u) != len(b):
        return False
    for i in range(len(u)):
        if b[i] == '*':
            continue
        if u[i] != b[i]:
            return False
    return True


def solution(user_id, banned_id):
    candidates = []

    # 1. banned_id마다 가능한 user 목록 만들기
    for b in banned_id:
        temp = []
        for u in user_id:
            if match(u, b):
                temp.append(u)
        candidates.append(temp)

    result = set()

    # 2. 순열로 모든 경우 시도
    for perm in permutations(user_id, len(banned_id)):
        ok = True
        used = set()

        for i in range(len(banned_id)):
            if not match(perm[i], banned_id[i]):
                ok = False
                break
            if perm[i] in used:
                ok = False
                break
            used.add(perm[i])

        if ok:
            result.add(tuple(sorted(used)))

    return len(result)