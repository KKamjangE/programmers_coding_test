function solution(n, lost, reserve) {
    const arr = new Array(n + 1).fill(0);
    lost.forEach((idx) => {
        arr[idx] -= 1;
    })
    reserve.forEach((idx) => {
        arr[idx] += 1;
    })

    for(let i = 2; i < arr.length; i++){
        if (arr[i] === -1 && arr[i-1] === 1){
            arr[i] = 0;
            arr[i-1] = 0;
        }else if (arr[i] === 1 && arr[i-1] === -1){
            arr[i] = 0;
            arr[i-1] = 0;
        }
    }
    
    return arr.filter((val) => val >= 0).length - 1;
}