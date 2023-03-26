def solution(my_str, n):
    ans = []
    for i in range(0, len(my_str), n):
        print(i)
        ans.append(my_str[i:i+n])
    return ans