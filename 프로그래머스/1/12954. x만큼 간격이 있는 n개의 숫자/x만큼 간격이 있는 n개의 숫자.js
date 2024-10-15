function solution(x, n) {
    return Array.from({length: n}, (_, index) => (index + 1) * x)
}