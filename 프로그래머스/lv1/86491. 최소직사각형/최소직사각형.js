function solution(sizes) {
    sizes.forEach((item) => {
        item.sort((a, b) => a - b);
    });
    
    const maxSize = [0, 0];
    
    sizes.forEach(([x, y]) => {
        maxSize[0] = Math.max(maxSize[0], y);
        maxSize[1] = Math.max(maxSize[1], x);
    })
    
    return maxSize[0] * maxSize[1];
}