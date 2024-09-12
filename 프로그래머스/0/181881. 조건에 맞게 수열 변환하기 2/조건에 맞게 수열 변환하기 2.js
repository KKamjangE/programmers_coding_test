function solution(arr) {
    let prevX
    let x = 0
    
    while(JSON.stringify(prevX) != JSON.stringify(arr)) {
        prevX = [...arr]
        
        arr = arr.map((item) => {
            if(item >= 50 && item % 2 === 0) item /= 2
            else if(item < 50 && item % 2 != 0) item = (item * 2) + 1
            return item
        })
        
        x++
    }
    
    return x - 1
}