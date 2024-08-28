function solution(arr, queries) {
    return queries.map((item) => {
        const [s, e, k] = item
        return arr.slice(s, e + 1).filter((item) => item > k).sort((a, b) => a - b)[0] ?? -1
    })
}