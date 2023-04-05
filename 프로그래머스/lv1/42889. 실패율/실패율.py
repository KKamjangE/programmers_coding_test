def solution(N, stages):
    ans = []
    length = len(stages)
    dic = {i:0 for i in range(1, N+1)}
    
    for i in range(1, N + 1):
        if length != 0:
            count = stages.count(i)
            dic[i] = count/length
            length -= count
    
    return sorted(dic, key= lambda x : dic[x], reverse=True)