def solution(a, b):
    ans = 0
    big = max(a, b)
    small = min(a, b)
    for i in range(small, big + 1):
        ans += i
    return ans