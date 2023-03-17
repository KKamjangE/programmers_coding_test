import sys
input = sys.stdin.readline

N, M = map(int, input().split())

s = [] # 결과를 담을 배열

visited = [False] * (N + 1) # 방문처리용 배열

def dfs(): # dfs 함수
    if len(s) == M: # 결과배열의 길이가 M과 같다면 탈출
        print(" ".join(map(str, s))) # 배열 요소를 출력
        return # 탈출
    for i in range(1, N + 1): # 리스트를 만들기 위한 순회
        if visited[i]: # 이미 방문 했다면
            continue # 다음 값 이어서 순회
        visited[i] = True # 방문 처리
        s.append(i) # 배열에 값 넣기
        dfs() # dfs 재귀
        s.pop() # 배열의 값 빼기
        visited[i] = False # 방문 처리 삭제

dfs()