import sys
input = sys.stdin.readline

N, M = map(int, input().split())

tree = list(map(int, input().split()))

bot, top = 1, max(tree)

while bot <= top:
    mid = (bot + top) // 2
    ans = 0
    
    for t in tree:
        if t >= mid:
            ans += t - mid
    
    if M > ans:
        top = mid - 1
    else:
        bot = mid + 1
        
print(top)