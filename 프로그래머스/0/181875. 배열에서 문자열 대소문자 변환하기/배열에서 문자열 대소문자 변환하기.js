function solution(strArr) {
    return strArr.map((item, index) => index % 2 === 0 ? item.toLowerCase() : item.toUpperCase())
}