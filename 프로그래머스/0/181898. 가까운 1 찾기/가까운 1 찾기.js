function solution(arr, idx) {
    return arr.findIndex((item, index) => item === 1 && index >= idx)
}