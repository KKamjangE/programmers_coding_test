function solution(my_string, s, e) {
    const tmp = my_string.slice(s, e + 1).split("").reverse().join("")
    const newStringArr = my_string.split("")
    newStringArr.splice(s, e - s + 1, tmp)
    return newStringArr.join("")
}