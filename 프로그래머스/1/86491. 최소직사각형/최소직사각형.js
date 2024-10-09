function solution(sizes) {
    const [w, h] = sizes.reduce(([w, h], [a, b]) => 
        [Math.max(w, Math.max(a, b)), Math.max(h, Math.min(a, b))]
    , [0, 0])
    return w * h
}