from collections import deque

def solution(num, total):
    ans = deque()
    center = total // num
    ans.append(center)
    count = 0
    while num > len(ans):
        count += 1
        ans.append(center + count)
        if num == len(ans):
            break
        ans.appendleft(center - count)
    
    tmp = sum(ans)
    while total != tmp:
        if tmp > total:
            tmp -= ans.pop()
            tmp += ans[0] - 1
            ans.appendleft(ans[0] - 1)
        elif tmp < total:
            tmp -= ans.popleft()
            tmp += ans[-1] + 1
            ans.append(ans[-1] + 1)

    return list(ans)