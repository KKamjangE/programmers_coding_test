import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    score = 0
    total = 0
    OX = input().strip()
    for i in OX:
        if i == "O":
            score += 1
            total += score
        else:
            score = 0
    print(total)