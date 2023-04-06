import heapq

def solution(k, score):
    ans = []
    que = []

    for i in range(len(score)):
        heapq.heappush(que, score[i])
        if len(que) > k:
            heapq.heappop(que)
        ans.append(que[0])

    return ans