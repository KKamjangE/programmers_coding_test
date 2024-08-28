function solution(arr, queries) {
    queries.forEach((item) => {
        const [i, j] = item
        const [tempi, tempj] = [arr[i], arr[j]]
        arr.splice(i, 1, tempj)
        arr.splice(j, 1, tempi)
    })
    
    return arr
}