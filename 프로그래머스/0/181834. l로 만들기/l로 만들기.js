function solution(myString) {
    return [...myString].map((item) => item < 'l' ? 'l' : item).join('')
}