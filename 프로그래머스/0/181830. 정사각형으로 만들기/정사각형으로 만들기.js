function solution(arr) {
    let n = arr.length - arr[0].length
    if(n < 0) {
        n *= -1
        return [...arr, ...Array.from({length: n}, () => Array.from({length: arr[0].length}, () => 0))]
    } else if(0 < n) {
        return arr.map((item) => [...item, ...Array.from({length:n}, () => 0)])
    } else {
        return arr
    }
}