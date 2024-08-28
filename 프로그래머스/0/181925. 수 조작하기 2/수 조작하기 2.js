function solution(numLog) {
    const controler = {
        "1": 'w',
        "-1": 's',
        "10": 'd',
        "-10": 'a'
    }
    return numLog.map((item, index) => controler[numLog[index + 1] - item]).join('')
}