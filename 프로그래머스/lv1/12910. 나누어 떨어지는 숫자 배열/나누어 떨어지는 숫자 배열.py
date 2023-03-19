def solution(arr, divisor):
    arr.sort()
    ans = []
    for i in arr:
        if i % divisor == 0:
            ans.append(i)

    return ans if ans else [-1]