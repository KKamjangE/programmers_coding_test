function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
           const a = arr1.reduce((acc, curr) => acc += curr, 0)
           const b = arr2.reduce((acc, curr) => acc += curr, 0)
           if(a === b) return 0
           return a > b ? 1 : -1
    }
    return arr1.length > arr2.length ? 1 : -1
}