function solution(priorities, location) {
    let ans = 0;
    const queue = priorities.map((item, index) => ({prioirity: item, location: index === location}))

    while(true) {
        const prosess = queue.shift()
        if(queue.some((item) => item.prioirity > prosess.prioirity)) {
            queue.push(prosess)
        } else {
            ans++ 
            if(prosess.location) break
        }
    }
    
    return ans
}