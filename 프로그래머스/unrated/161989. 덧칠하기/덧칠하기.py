def solution(n, m, section):
    ans = 0
    paint = 0
    for i in section:
        if i >= paint:
            paint = i + m
            ans += 1
    return ans