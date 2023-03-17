import sys
import itertools
input = sys.stdin.readline

N = int(input())

arr = list(map(int, input().split()))

ans = 0

for a in itertools.permutations(arr): # 모든 순열을 만들어 순회
    sum = 0 # 계산값
    for i in range(N-1): # 순열 순회
        sum += abs(a[i] - a[i+1]) # 계산
    ans = max(sum, ans) # 가장 큰 값 저장
    
print(ans)