function solution(numbers, n) {
    return numbers.reduce((acc, curr) => acc += acc <= n ? curr : 0, 0)
}