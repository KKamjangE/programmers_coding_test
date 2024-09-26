function solution(strArr) {
    const map = new Map()
    strArr.forEach((item) => map.set(item.length, (map.get(item.length) | 0) + 1 ))
    return Math.max(...map.values())
}