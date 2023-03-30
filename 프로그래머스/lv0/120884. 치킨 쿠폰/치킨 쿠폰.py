def solution(chicken):
    ans = 0
    while chicken >= 10:
        chicken -= 10
        chicken += 1
        ans += 1
    return ans