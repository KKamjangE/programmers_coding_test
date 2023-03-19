def solution(n):
    ans = ''
    while n > 0:
        n, re = divmod(n, 3)
        ans += str(re)
    return int(ans, 3)