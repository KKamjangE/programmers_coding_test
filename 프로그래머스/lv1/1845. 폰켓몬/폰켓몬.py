def solution(nums):
    newNums = set(nums)
    get = len(nums) // 2
    if len(newNums) >= get:
        return get
    else:
        return len(newNums)