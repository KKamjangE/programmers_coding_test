def solution(array, height):
    ans = 0
    for h in array:
        if h > height:
            ans += 1
    return ans