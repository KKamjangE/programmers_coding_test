from collections import deque

def solution(progresses, speeds):
    answer = []
    count = 1
    tmp = 0
    que = deque()
    for i in range(len(progresses)):
        que.append((progresses[i], speeds[i]))

    while que:
        if que[0][0] + (count * que[0][1]) >= 100:
            que.popleft()
            tmp += 1
        else:
            answer.append(tmp)
            count += 1
            tmp = 0
    answer.append(tmp)

    return [p for p in answer if 0 < p]