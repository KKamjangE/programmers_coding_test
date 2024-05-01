total = int(input())
count = int(input())
sum = 0

for _ in range(count):
    price, num = map(int, input().split())
    sum += price * num

if total == sum:
    print('Yes')
else:
    print('No')