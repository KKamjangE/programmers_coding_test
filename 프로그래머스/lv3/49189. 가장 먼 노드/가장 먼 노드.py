from collections import deque

def solution(n, edge):
    graph = [[] for _ in range(n + 1)]
    visit = [0] * (n + 1)
    visit[1] = 1
    for e in edge:
        a, b = e
        graph[a].append(b)
        graph[b].append(a)

    def dijkstra(start):
        que = deque([start])

        while que:
            now = que.popleft()
            for i in graph[now]:
                if not visit[i]:
                    visit[i] = visit[now] + 1
                    que.append(i)

    dijkstra(1)
    return visit.count(max(visit))