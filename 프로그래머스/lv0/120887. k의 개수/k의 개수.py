def solution(i, j, k):
    ans = 0
    for a in range(i, j + 1):
        if str(a).count(str(k)):
            ans += str(a).count(str(k))
    return ans