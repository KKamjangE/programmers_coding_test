function solution(arr)
{
    return arr.filter((item, index) => arr[index - 1] !== item)
}