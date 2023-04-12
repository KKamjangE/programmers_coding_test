from collections import deque

def solution(numbers, target):
    ans = 0

    que = deque()
    que.append([numbers[0], 1])
    que.append([-numbers[0], 1])
    
    while que:
        num, depth = que.popleft()
        if depth == len(numbers) and num == target:
            ans += 1

        if depth < len(numbers):
            que.append([num + numbers[depth], depth + 1])
            que.append([num - numbers[depth], depth + 1])
    
    return ans