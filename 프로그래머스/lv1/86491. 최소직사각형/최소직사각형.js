function solution(sizes) {
    const ans = sizes.map((value) => value.sort((a, b) => b - a));
    let x = 0;
    let y = 0;
    ans.forEach(([w, h]) => {
        x = Math.max(x, w);
        y = Math.max(y, h);
    })
    
    return x * y;
}