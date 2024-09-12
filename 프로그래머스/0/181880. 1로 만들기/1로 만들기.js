function solution(num_list) {
    let result = 0
    num_list.forEach((item) => {
        while(item != 1){
            if(item % 2 === 0) item /= 2
            else item = (item - 1) / 2
            
            result++
        }
    })
    
    return result
}