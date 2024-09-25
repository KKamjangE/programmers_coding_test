function solution(arr) {
    const stk = []
    arr.forEach((item) => {
        if(stk.length === 0){
            stk.push(item)
        } else {
            if(stk[stk.length-1] === item) stk.pop()
            else stk.push(item)
        }
    })
    return stk.length ? stk : [-1]
}