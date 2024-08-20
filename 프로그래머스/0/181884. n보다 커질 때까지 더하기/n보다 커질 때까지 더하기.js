function solution(numbers, n) {
    return numbers.reduce((prev, curr) => prev <= n ? prev + curr : prev ,0)
}