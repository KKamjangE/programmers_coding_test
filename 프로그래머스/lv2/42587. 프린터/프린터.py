from collections import deque

def solution(priorities, location):
    ans = []
    que = deque()
    for i in range(len(priorities)):
        que.append([priorities[i], i])
    
    while que:
        q = que.popleft()
        if que and max(que)[0] > q[0]:
            que.append(q)
        else:
            ans.append(q)

    for i in ans:
        if i[1] == location:
            return ans.index(i) + 1