import sys
input = sys.stdin.readline

N = int(input())

def sugar(n):
    ans = 0
    while n >= 0: # n이 0보다 작아지면 탈출
        if n % 5 == 0: # 5로 나누어 진다면
            ans += n // 5 # 5로 나눈 몫을 넣는다
            return ans
            break
        n -= 3 # 3을 반복적으로 뺀다
        ans += 1
    else:
        return -1

print(sugar(N))