function solution(n, lost, reserve) {
    const arr = Array.from({length: n + 1}, () => 1)
    lost.forEach((v) => arr[v] -= 1)
    reserve.forEach((v) => arr[v] += 1)

    arr.forEach((v, i) => {
        if(v > 1) {
            if(arr[i-1] < 1) {
            arr[i] -= 1
            arr[i-1] += 1
            } else if (arr[i + 1] < 1) {
                arr[i] -= 1
                arr[i + 1] += 1
            }
        }
    })
    
    return arr.filter((v) => v).length - 1
}