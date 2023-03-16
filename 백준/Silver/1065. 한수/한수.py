import sys
input = sys.stdin.readline

N = int(input())

ans = 0

for i in range(1, N + 1):
    arr = list(map(int, str(i)))
    if i < 100: # 100 이하의 수는 모두 한수
        ans += 1
    elif arr[0] - arr[1] == arr[1] - arr[2]: # 각 자리수의 차이가 일정한지 확인한다
        ans += 1
        
print(ans)

