function solution(numLog) {
    const controler = {
        "1": 'w',
        "-1": 's',
        "10": 'd',
        "-10": 'a'
    }
    return numLog.slice(1).map((item, index) => controler[item - numLog[index]]).join('')
}