def solution(number, k):
    ans = []

    for i in number:
        while k > 0 and ans and ans[-1] < i:
            ans.pop()
            k -= 1
        ans.append(i)
    return "".join(ans[:len(ans) - k])