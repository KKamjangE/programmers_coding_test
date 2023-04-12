from collections import deque

def solution(progresses, speeds):
    ans = []
    days = 1
    tmp = 0

    while progresses:
        if progresses[0] + (speeds[0] * days) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            tmp += 1
        else:
            ans.append(tmp)
            tmp = 0
            days += 1
    ans.append(tmp)
    
    return [q for q in ans if q > 0]