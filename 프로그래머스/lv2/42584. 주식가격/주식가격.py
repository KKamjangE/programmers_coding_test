def solution(prices):
    ans = [0] * len(prices)
    stack = []
    for i in range(len(prices)):
        while stack and prices[stack[-1]] > prices[i]:
            tmp = stack.pop()
            ans[tmp] = i - tmp

        stack.append(i)

    while stack:
        tmp = stack.pop()
        ans[tmp] = len(prices) - tmp - 1
    return ans