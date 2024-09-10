function solution(arr) {
    return arr.reduce((acc, curr) => {
        if(acc.length === 0) {
            acc.push(curr)
            return acc
        }
        if(acc[acc.length-1] != curr) acc.push(curr)
        return acc
    }, [])
}
