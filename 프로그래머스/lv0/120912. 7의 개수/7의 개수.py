def solution(array):
    ans = 0
    for i in array:
        if str(i).count("7"):
            ans += str(i).count("7")
    return ans