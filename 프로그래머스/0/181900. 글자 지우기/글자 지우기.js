function solution(my_string, indices) {
    const strArr = my_string.split("")
    indices.forEach((item) => strArr.splice(item, 1, ""))
    return strArr.join("")
}
