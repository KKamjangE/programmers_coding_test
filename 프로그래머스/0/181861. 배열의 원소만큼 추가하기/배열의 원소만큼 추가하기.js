function solution(arr) {
    return arr.flatMap((item) => Array.from({length: item}, () => item))
}