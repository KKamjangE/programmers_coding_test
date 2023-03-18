import sys
input = sys.stdin.readline

N = int(input())

tree = {}

for i in range(N):
    root, left, right = input().split() # 루트, 왼쪽 자식, 오른쪽 자식
    tree[root] = left, right # 루트의 자식들을 값으로 딕셔너리에 저장
    
def preorder(root): # 전위 순회
    if root != ".":
        print(root, end="")
        preorder(tree[root][0])
        preorder(tree[root][1])
        
def inorder(root): # 중위 순회
    if root != ".":
        inorder(tree[root][0])
        print(root, end="")
        inorder(tree[root][1])

def postorder(root): # 후위 순회
    if root != ".":
        postorder(tree[root][0])
        postorder(tree[root][1])
        print(root, end="")
        
preorder("A")
print()
inorder("A")
print()
postorder("A")