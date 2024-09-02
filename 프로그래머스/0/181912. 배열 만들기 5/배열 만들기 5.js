function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, curr) => {
        const temp = Number(curr.split("").splice(s, l).join(""))
        if(temp > k) acc.push(temp)
        return acc
    } , [])
}