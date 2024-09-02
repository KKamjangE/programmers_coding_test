function solution(my_string, queries) {
    const strArr = my_string.split("")
    queries.forEach(([s, e]) => {
        const temp = strArr.slice(s, e + 1)
        strArr.splice(s, temp.length, ...temp.reverse())
    })
    return strArr.join('')
}