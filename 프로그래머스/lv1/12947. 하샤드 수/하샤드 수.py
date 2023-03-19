def solution(arr):
    newArr = [int(x) for x in str(arr)]
    return arr % sum(newArr) == 0