function solution(arr) {
    const stk = []
    let i = 0
    while(arr.length > i){
        if(!stk.length) {
            stk.push(arr[i])
            i++
            continue
        }
        
        if(stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i])
            i++
        } else {
            stk.pop()
        }
    }
    
    return stk
}