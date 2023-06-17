function solution(clothes) {
    let ans = 1;
    const obj = {};
    
    clothes.forEach(([_, category]) => {
        if(obj[category]) obj[category] += 1;
        else obj[category] = 1;
    })
    
    Object.keys(obj).forEach((key) => {
        ans *= obj[key] + 1;
    })
    
    return ans - 1;
}