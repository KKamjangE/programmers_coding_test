def solution(n, results):
    answer = 0
    graph = [[0] * (n) for _ in range(n)]

    for a, b in results:
        graph[a-1][b-1] = 1
        graph[b-1][a-1] = -1
        
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if i == j or graph[i][j] in [1, -1]:
                    continue
                if graph[i][k] == graph[k][j] == 1:
                    graph[i][j] = 1
                    graph[j][i] = graph[k][i] = graph[j][k] = - 1
    for row in graph:
        if row.count(0) == 1:
            answer += 1
    return answer