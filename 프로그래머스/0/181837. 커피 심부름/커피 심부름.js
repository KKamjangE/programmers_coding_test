function solution(order) {
    return order.reduce((acc, curr) => {
        if(curr.includes('cafelatte')) {
            acc += 5000
        } else {
            acc += 4500
        }
        return acc
    }, 0)
}