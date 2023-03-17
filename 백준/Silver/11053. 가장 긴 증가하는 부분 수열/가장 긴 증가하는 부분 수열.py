import sys
input = sys.stdin.readline

N = int(input())

A = list(map(int, input().split()))

dp = [0 for _ in range(N)] # dp 테이블

for i in range(N):
    for j in range(i):
        if A[i] > A[j] and dp[i] < dp[j]: # 이전 원소들과 비교
            dp[i] = dp[j] # 이전 길이값 가져오기
            
    dp[i] += 1 # 수열 길이 + 1

print(max(dp)) # 가장 긴 증가하는 부분 수열의 길이 출력