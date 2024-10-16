function solution(n) {
    return (n + "").split('').reduce((acc, curr) => acc + +curr, 0)
}