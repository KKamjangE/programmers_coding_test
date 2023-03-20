def solution(array, commands):
    ans = []
    for i in commands:
        newArr = sorted(array[i[0]-1:i[1]])
        ans.append(newArr[i[2]-1])
    return ans