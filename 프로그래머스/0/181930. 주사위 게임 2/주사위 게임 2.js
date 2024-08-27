function solution(a, b, c) {
    const set = new Set([a, b, c])
    let sum = a + b + c
    if (set.size === 3) return sum
    sum *= Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
    if (set.size === 2) return sum
    sum *= Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)
    if (set.size === 1) return sum
}
