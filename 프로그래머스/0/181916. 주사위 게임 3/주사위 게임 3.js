function solution(a, b, c, d) {
    const map = new Map()
    Array(a, b, c, d).forEach((item) => map.set(item, (map.get(item) || 0) + 1))
    switch (map.size){
        case 1:
            return 1111 * a
        case 2:
            if([...map][0][1] === 2) {
                const [a, b] = [...map.keys()]
                return (a + b) * Math.abs(a - b)
            } else {
                const {a, b} = [...map].reduce((acc, [key, value]) => {
                    value === 3 ? acc.a = key : acc.b = key
                    return acc
                }, {a: null, b: null})
                return Math.pow(10 * a + b, 2)
            }
        case 3: 
             return [...map].reduce((acc, [key, value]) => value === 1 ? acc * key : acc, 1)
        case 4:
            return Math.min(a, b, c, d)
    }
}