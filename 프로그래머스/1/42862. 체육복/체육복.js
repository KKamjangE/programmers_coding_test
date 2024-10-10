function solution(n, lost, reserve) {
    const arr = Array.from({length: n + 1}, () => 0)
    lost.forEach((item) => arr[item - 1] -= 1)
    reserve.forEach((item) => arr[item - 1] += 1)
    
    arr.forEach((item, index) => {
        if(item > 0) {
            if(arr[index - 1] < 0){
                arr[index - 1] += 1
                arr[index] -= 1
            } else if (arr[index + 1] < 0) {
                arr[index + 1] += 1
                arr[index] -= 1
            }
        }
    })
    
    return arr.filter((item) => item >= 0).length - 1
}