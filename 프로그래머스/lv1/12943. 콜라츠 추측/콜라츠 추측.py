def solution(num):
    ans = 0

    while num > 1:
        if num % 2 == 0:
            num //= 2
        elif num % 2 != 0:
            num = (num * 3) + 1
        ans += 1
        if ans >= 500:
            return -1

    return ans