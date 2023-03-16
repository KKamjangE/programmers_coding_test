import sys
input = sys.stdin.readline

C = int(input())

for _ in range(C):
    arr = list(map(int, input().split())) # 점수 배열
    average = sum(arr[1:]) / arr[0] # 평균값
    over = [i for i in arr[1:] if i > average] # 평균값을 넘는 점수 배열
    print(f'{len(over) / arr[0] * 100:.3f}%')