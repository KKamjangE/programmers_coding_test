function solution(participant, completion) {
    const obj = participant.reduce((acc, curr) => {
        acc[curr] ? acc[curr] += 1 : acc[curr] = 1
        return acc
    }, {})
    
    completion.forEach((key) => {
        obj[key] -= 1
    })
    
    return Object.keys(obj).filter((key) => obj[key] !== 0).join()
}