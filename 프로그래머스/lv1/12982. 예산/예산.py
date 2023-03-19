def solution(d, budget):
    d.sort()
    ans = 0
    
    for i in d:
        budget -= i
        if budget < 0:
            return ans
        ans += 1
        
    return ans