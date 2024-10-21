function solution(priorities, location) {
    let ans = 0
    const queue = priorities.map((item, index) => [item, index])
    
    while(queue.length) {
        const prosess = queue.shift()
        if(queue.some((item) => item[0] > prosess[0])) {
            queue.push(prosess)
        } else {
            ans++
            if(prosess[1] === location) break
        }
    }
    
    return ans
}