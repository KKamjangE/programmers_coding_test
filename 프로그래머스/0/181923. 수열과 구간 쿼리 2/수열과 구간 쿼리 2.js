function solution(arr, queries) {
    const anw = []
    queries.forEach((item) => {
        const [s, e, k] = item
        const minVal = Math.min(...arr.slice(s, e + 1).filter((item) => item > k))
        anw.push(minVal !== Infinity ? minVal : -1)
    })
    
    return anw
}