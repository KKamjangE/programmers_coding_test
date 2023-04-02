def solution(n):
    ans = 0
    for i in range(n):
        ans += 1
        while ans % 3 == 0 or "3" in str(ans):
            ans += 1

    return ans