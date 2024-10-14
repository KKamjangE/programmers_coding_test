function solution(clothes) {
    const obj = {}
    
    clothes.forEach(([cloth, category]) => obj[category] = (obj[category] | 0) + 1)
    
    return Object.values(obj).reduce((acc, curr) => acc *= curr + 1, 1) - 1
}