from collections import deque

def solution(maps):
    INF = int(1e9)
    visited = [[-1] * len(maps[0]) for _ in range(len(maps))]
    que = deque([(0, 0)])
    visited[0][0] = 1
    dx, dy = [1, -1, 0, 0], [0, 0, 1, -1]

    while que:
        x, y = que.popleft()
        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y
            if 0 <= nx < len(maps) and 0 <= ny < len(maps[0]) and maps[nx][ny] == 1 and visited[nx][ny] == -1:
                visited[nx][ny] = visited[x][y] + 1
                que.append((nx, ny))

    return visited[-1][-1]