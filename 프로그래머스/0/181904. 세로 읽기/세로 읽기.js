function solution(my_string, m, c) {
    return my_string.split("").reduce((acc, curr, index) => {
        if((index) % m === c - 1) acc += curr
        return acc
    }, "")
}
