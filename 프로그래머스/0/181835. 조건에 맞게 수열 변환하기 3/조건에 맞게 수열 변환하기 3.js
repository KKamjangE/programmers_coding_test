function solution(arr, k) {
    return arr.map((item) => k % 2 === 0 ? item + k : item * k)
}