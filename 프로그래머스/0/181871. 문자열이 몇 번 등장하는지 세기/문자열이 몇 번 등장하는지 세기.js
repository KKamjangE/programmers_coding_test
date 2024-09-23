function solution(myString, pat) {
    let str = ''
    return [...myString].reduce((acc, curr) => {
        str += curr
        if(str.slice(-pat.length) === pat) acc += 1
        return acc
    }, 0)
}