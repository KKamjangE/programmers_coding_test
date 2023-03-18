import sys
input = sys.stdin.readline

N = int(input())

arr = list(map(int, input().split())) # 탑의 높이들

stack = [] # 스택
ans = [] # 결과

for i in range(N):
    if stack: # 스택에 요소가 있다면
        while stack:
            if stack[-1][1] < arr[i]: # 스택에 있는 탑이 더 낮다면
                stack.pop() # 제거
                if not stack: # 스택이 비었다면
                    ans.append(0) # 수신하는 탑 없음 0
                    stack.append([i, arr[i]]) # 현재 탑 높이 스택에 추가
                    break
            else: # 스택에 있는 탑이 더 높다면
                ans.append(stack[-1][0] + 1) # 해당 탑의 인덱스
                stack.append([i, arr[i]]) # 스택에 다음 탑 추가
                break
    else:
        ans.append(0) # 스택에 요소가 없으므로 수신하는 탑 없음 0
        stack.append([i, arr[i]]) # 현재 탑 높이 스택에 추가
        
print(*ans, sep=" ")