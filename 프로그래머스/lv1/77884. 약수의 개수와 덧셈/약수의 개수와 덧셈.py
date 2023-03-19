def solution(left, right):
    ans = 0
    for i in range(left, right + 1):
        y = 0
        for j in range(1, i + 1):
            if i % j == 0:
                y += 1
        if y % 2 == 0:
            ans += i
        else:
            ans -= i
    return ans