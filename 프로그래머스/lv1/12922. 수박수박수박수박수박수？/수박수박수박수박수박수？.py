def solution(n):
    ans = ""
    for i in range(1, n + 1):
        if i % 2 == 0:
            ans += "박"
        else:
            ans += "수"
    return ans