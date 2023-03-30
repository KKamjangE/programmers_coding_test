from collections import deque

def solution(numbers, target):
    ans = 0
    que = deque()
    que.append([numbers[0], 0])
    que.append([-numbers[0], 0])

    while que:
        tmp, idx = que.popleft()
        idx += 1
        if idx < len(numbers):
            que.append([tmp + numbers[idx], idx])
            que.append([tmp - numbers[idx], idx])
        else:
            if tmp == target:
                ans += 1

    return ans