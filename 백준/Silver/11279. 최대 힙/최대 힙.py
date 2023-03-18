import heapq
import sys
input = sys.stdin.readline

N = int(input())

arr = []

for i in range(N):
    a = int(input())

    if a == 0:
        if arr:
            hmax = heapq.heappop(arr) # 힙에서 제일 작은 값 제거
            print(-hmax) # 음수로 저장한 값을 다시 양수로 바꿔서 제일 큰 값으로 출력
        else:
            print(0)
    else:
        heapq.heappush(arr, -a) # 값을 음수로 저장
        # 음수로 저장하는 이유는 파이썬에서 힙큐는 최소 힙만 지원하기 때문