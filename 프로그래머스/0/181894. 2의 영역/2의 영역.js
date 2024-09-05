function solution(arr) {
    const result = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1)
    return result.length ? result : [-1]
}