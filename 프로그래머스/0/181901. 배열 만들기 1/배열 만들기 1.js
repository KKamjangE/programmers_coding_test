function solution(n, k) {
    const result = [k]
    let count = k
    while(count + k <= n){
        count += k
        result.push(count)
    }
    return result
}