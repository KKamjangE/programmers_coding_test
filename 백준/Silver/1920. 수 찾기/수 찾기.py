import sys
input = sys.stdin.readline

N = int(input())
Narr = list(map(int, input().split()))
Narr.sort() # 이분 탐색을 위한 정렬

A = int(input())
Aarr = list(map(int, input().split()))

def search(arr, a): # 이분 탐색 함수
    pl = 0 # 왼쪽 포인터
    pr = len(arr) - 1 # 오른쪽 포인터
    
    while True:
        pc = (pl + pr) // 2 # 중앙 값
        if arr[pc] == a: # 중앙값과 키값이 같다면
            return 1 # 검색 성공
        elif arr[pc] < a: # 중앙값보다 키값이 크다면
            pl = pc + 1 # 왼쪽 포인터를 중앙으로
        else: # 중앙값보다 키값이 작다면
            pr = pc - 1 # 오른쪽 포인터를 중앙으로
        if pl > pr: # 포인터가 겹친다면
            break # 루프문 탈출
    return 0 # 검색 실패

for a in Aarr:
    print(search(Narr, a))