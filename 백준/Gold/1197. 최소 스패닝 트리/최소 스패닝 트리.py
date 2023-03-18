import sys
input = sys.stdin.readline

V, E = map(int, input().split())

Vroot = [i for i in range(V + 1)] # 정점 root를 저장하는 배열
Earr = [list(map(int, input().split())) for _ in range(E)] # 간선들을 저장하는 배열

Earr.sort(key=lambda x: x[2]) # 가중치 기준으로 간선 정렬

def find(x): # 간선이 이은 두 정점을 찾는 함수
    if x != Vroot[x]:
        Vroot[x] = find(Vroot[x])
    return Vroot[x]

ans = 0
for a, b, c in Earr: # 정점 a, b 간선 가중치 c
    aRoot = find(a) # Vroot에서 a정점에 대한 정보를 찾음
    bRoot = find(b) # Vroot에서 b정점에 대한 정보를 찾음
    if aRoot != bRoot: # 두 정점이 달라야 함
        if aRoot > bRoot: 
            Vroot[aRoot] = bRoot
        else:
            Vroot[bRoot] = aRoot
        ans += c

print(ans)