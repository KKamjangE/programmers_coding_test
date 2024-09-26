function solution(arr) {
    if(arr.length === 1) return arr
    let cnt = 2;
    while(arr.length > cnt){
        cnt *= 2
    }
    return [...arr, ...Array.from({length: cnt - arr.length}, () => 0)]
}