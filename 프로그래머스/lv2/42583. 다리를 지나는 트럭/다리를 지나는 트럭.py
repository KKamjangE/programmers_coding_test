from collections import deque

def solution(bridge_length, weight, truck_weights):
    ans = 0
    que = deque([0] * bridge_length)
    w = 0
    
    while que:
        ans += 1
        w -= que.popleft()
        if truck_weights:
            if w + truck_weights[0] <= weight:
                w += truck_weights[0]
                que.append(truck_weights.pop(0))
            else:
                que.append(0)
                
    return ans