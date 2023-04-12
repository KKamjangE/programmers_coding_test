def solution(arr):
    ans = []
    
    for i in arr:
        if not ans:
            ans.append(i)
        if ans[-1] == i:
            continue
        else:
            ans.append(i)
    
    return ans