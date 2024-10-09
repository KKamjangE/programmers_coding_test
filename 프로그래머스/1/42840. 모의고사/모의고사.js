function solution(answers) {
    const caseA = [1, 2, 3, 4, 5]
    const caseB = [2, 1, 2, 3, 2, 4, 2, 5]
    const caseC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const arr = answers.reduce(([a, b, c], curr, index) => 
        [
            a += caseA[index % 5] === curr ? 1 : 0,
            b += caseB[index % 8] === curr ? 1 : 0,
            c += caseC[index % 10] === curr ? 1 : 0
        ]
    , [0, 0, 0])
    const maxNum = Math.max(...arr)
    return arr.reduce((acc, curr, index) => curr === maxNum ? [...acc, index + 1] : acc, [])
}