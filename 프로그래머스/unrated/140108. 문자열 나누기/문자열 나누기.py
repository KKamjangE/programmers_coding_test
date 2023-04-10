def solution(s):
    ans = 0
    xCount = 0
    diff = 0

    for i in s:
        if xCount == diff:
            ans += 1
            x = i
        if x == i:
            xCount += 1
        else:
            diff += 1

    return ans