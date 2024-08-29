function solution(arr, queries) {
    queries.forEach((item) => {
        const [s, e, k] = item
        for(let i=s;i<=e;i++){
            arr[i] += i % k === 0 ? 1 : 0
        }
    })
    
    return arr
}