function solution(num_list) {
    const [a, b] = num_list.reduce((acc, curr, index) => {
        if(index % 2 === 0) acc[0] += curr
        else acc[1] += curr
        return acc
    }, [0, 0])
    
    return a > b ? a : b
}