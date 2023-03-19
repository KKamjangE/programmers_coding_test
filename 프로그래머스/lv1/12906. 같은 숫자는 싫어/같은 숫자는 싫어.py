def solution(arr):
    ans = []
    for i in arr:
        if not ans:
            ans.append(i)
        elif ans[-1] != i:
            ans.append(i)
            
    return ans