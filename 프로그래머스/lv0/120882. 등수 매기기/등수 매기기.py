def solution(score):
    ans = []
    average = []
    for i in score:
        average.append(sum(i)/2)
    sort_average = sorted(average, reverse=True)
    for i in average:
        ans.append(sort_average.index(i) + 1)
    return ans