function solution(a, d, included) {
    return included.reduce((acc, curr, index) => curr ? acc + a + (index * d) : acc ,0)
}