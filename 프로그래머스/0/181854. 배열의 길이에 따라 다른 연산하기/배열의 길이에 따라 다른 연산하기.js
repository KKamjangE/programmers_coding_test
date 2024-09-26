function solution(arr, n) {
    return arr.map((item, index) => {
        if(arr.length % 2 === 0){
            return index % 2 != 0 ? item + n : item
        } else {
            return index % 2 === 0 ? item + n : item
        }
    })
}