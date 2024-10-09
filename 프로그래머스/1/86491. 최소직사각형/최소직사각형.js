function solution(sizes) {
    const sortedArr = sizes.map((item) => item.sort((a, b) => a - b))
    const {w, h} = sortedArr.reduce((acc, curr) => {
        const [currW, currH] = curr
        acc.w = Math.max(acc.w, currW)
        acc.h = Math.max(acc.h, currH)
        return acc
    }, {w: 0, h: 0})
    return w * h
}