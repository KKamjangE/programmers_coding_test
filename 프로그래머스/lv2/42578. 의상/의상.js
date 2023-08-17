function solution(clothes) {
    let ans = 1;
    const obj = {};
    
    clothes.forEach(([item, category]) => {
        obj[category] = (obj[category] || 0) + 1;
    });
    
    Object.values(obj).forEach((item) => {
        ans *= item + 1;
    });
    
    return ans - 1;
}