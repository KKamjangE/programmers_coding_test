function solution(progresses, speeds) {
    const ans = []
    let day = 1
    let index = 0
    
    while(progresses.length > index) {
        let complete = 0
        while(progresses[index] + speeds[index] * day >= 100){
            index++
            complete++
        }
        
        if(complete > 0) ans.push(complete)
        day++
    }
    
    return ans
}