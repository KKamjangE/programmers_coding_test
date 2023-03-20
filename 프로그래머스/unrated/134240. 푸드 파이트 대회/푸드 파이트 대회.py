def solution(food):
    ans = ""
    for i in range(1, len(food)):
        if food[i] >= 2:
            ans += str(i) * (food[i] // 2)
    return ans + "0" + ans[::-1]