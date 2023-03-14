B = int(input())
A = int(input())
A_list = list(map(int, str(A)))
for i in range(len(A_list)):
    print(A_list[2-i]*B)
print(A*B)