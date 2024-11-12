function solution(name) {
    let UD = 0
    let LR = name.length - 1;
    
    [...name].forEach((str, index) => {
        UD += Math.min(str.charCodeAt() - 65, 91 - str.charCodeAt())
        
        let next = index + 1
        
        while(name[next] === "A" && next < name.length) {
            next++
        }
        
        LR = Math.min(
                        LR,
                        index * 2 + name.length - next, // -> 오른쪽으로 현재 위치 * <- 돌아옴 + <- 왼쪽으로 처리
                        index + 2 * (name.length - next) // <- 왼쪽부터 처리 + 돌아와서 오른쪽으로 처리
                     )
        console.log(LR)
        console.log(`${index} + 2 * (${name.length} - ${next})`)
    })
    
    return UD + LR
}