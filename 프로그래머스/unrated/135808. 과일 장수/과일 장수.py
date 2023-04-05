def solution(k, m, score):
    ans = 0
    score.sort(reverse=True)

    for i in range(0, len(score), m):
        box = score[i:i+m]
        
        if len(box) == m:
            ans += box[-1] * m
    
    return ans