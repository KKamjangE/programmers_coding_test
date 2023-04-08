def solution(name, yearning, photo):
    ans = [0] * (len(photo))
    
    for i in range(len(name)):
        for j in range(len(photo)):
            if photo[j].count(name[i]):
                ans[j] += yearning[i]

    return ans