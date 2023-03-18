import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**8) # 재귀 호출 깊이 제한

arr = []

while True:
    try:
        arr.append(int(input()))
    except:
        break
    
def postorder(start, end):
    if start > end:
        return
    
    idx = end + 1
    root = arr[start]
    
    for i in range(start + 1, end + 1):
        if root < arr[i]:
            idx = i
            break
        
    postorder(start + 1, idx - 1)
    postorder(idx, end)
    print(root)
    
postorder(0, len(arr) - 1)