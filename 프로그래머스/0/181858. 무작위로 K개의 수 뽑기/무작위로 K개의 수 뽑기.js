function solution(arr, k) {
    const set = new Set(arr)
    const result = Array.from(set).slice(0, k)
    return [...result, ...Array.from({length: k - result.length}, () => -1)]
}