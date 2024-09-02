function solution(my_strings, parts) {
    return my_strings.reduce((acc, curr, index) => {
        const [s, e] = parts[index]
        acc += curr.split("").slice(s, e + 1).join('')
        return acc 
    }, "")
}