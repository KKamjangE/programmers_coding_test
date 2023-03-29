import heapq

def solution(N, road, K):
    INF = int(1e9) # 최대 값
    graph = [[] for _ in range(N + 1)] # 그래프
    distance = [INF] * (N + 1) # 가중치를 저장할 배열
    
    for r in road:
        a, b, c = r # 정점 a, b와 가중치
        graph[a].append((b, c)) # a에서 b로 가는데 c만큼의 비용
        graph[b].append((a, c)) # b에서 a로 가는데 c만큼의 비용

    def dijkstra(start):
        q = [] # heapq로 사용할 배열
        distance[start] = 0 # 시작 거리값 0으로 초기화
        heapq.heappush(q, (0, start)) # 처음 시작은 비용 0

        while q:
            dist, now = heapq.heappop(q) # 가중치, 현재 정점
            
            if distance[now] < dist:
                continue
            for i in graph[now]: # 그래프에서 현재 정점에서 연결된 정점들 모두 확인
                cost = dist + i[1] # 현재 가중치 + 다음 가중치
                if cost < distance[i[0]]: # 최단 경로라면
                    distance[i[0]] = cost # 해당 정점까지 가는 비용 저장
                    heapq.heappush(q, (cost, i[0])) # 최단 거리를 구해야 하기 때문에 cost를 앞에 넣어서 힙큐 정렬
    
    dijkstra(1) # 시작 정점 1
    return len([d for d in distance if d <= K]) # 모든 정점의 최단 거리를 순회

print(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3))