function solution(arr, query) {
    query.forEach((item, index) => {
        if(index % 2 === 0) {
            arr = arr.slice(0, item + 1)
        } else {
            arr = arr.splice(item)
        }
    })
    return arr
}