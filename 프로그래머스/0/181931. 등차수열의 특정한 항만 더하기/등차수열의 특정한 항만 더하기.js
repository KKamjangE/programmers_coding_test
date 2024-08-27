function solution(a, d, included) {
    let sum = 0;
    included.forEach((item, index) => sum += item ? a + (index * d) : 0)
    return sum
}