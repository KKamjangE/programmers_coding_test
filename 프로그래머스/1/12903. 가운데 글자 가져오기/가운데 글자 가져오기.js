function solution(s) {
    const len = s.length
    const i = len / 2
    if(len % 2 === 0){
        return s.slice(i - 1, i + 1)
    } else {
        return s.slice(i, i + 1)
    }
}