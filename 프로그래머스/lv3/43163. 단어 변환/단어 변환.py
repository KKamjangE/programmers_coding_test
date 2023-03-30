from collections import deque

def solution(begin, target, words):
    ans = 0
    visited = [False] * len(words)
    que = deque()
    que.append([begin, 0])
        
    while que:
        q, depth = que.popleft()

        if q == target:
            ans = depth
            break

        for i in range(len(words)):
            count = 0
            if not visited[i]:
                for j in range(len(words[i])):
                    if q[j] != words[i][j]:
                        count += 1
                if count == 1:
                    que.append([words[i], depth + 1])
                    visited[i] = True

    return ans