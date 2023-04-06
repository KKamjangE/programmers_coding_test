def solution(lottos, win_nums):
    ans = [0, 0]
    win = 7
    result = 0
    zero = 0
    
    for i in range(len(lottos)):
        if lottos[i] == 0:
            zero += 1
        else:
            result += win_nums.count(lottos[i])
                
    if win - result < 6:
        ans[1] = win - result
    else:
        ans[1] = 6
        
    if win - (zero + result) < 6:
        ans[0] = win - (zero + result)
    else:
        ans[0] = 6
    
    return ans