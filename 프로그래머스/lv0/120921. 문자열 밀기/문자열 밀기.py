from collections import deque

def solution(A, B):
    que = deque(list(A))
    for i in range(len(que)):
        if "".join(que) == B:
            return i
        que.appendleft(que.pop())
        
    return -1