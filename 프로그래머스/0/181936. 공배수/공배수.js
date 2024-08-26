function solution(number, n, m) {
    return number % m === 0 && number % n === 0 ? 1 : 0
}