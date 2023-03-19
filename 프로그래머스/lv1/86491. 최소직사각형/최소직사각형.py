def solution(sizes):
    ans = [0, 0]
    for i in sizes:
        i.sort()

    for i in sizes:
        ans[0] = max(i[0], ans[0])
        ans[1] = max(i[1], ans[1])
        
    return ans[0] * ans[1]