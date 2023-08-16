function solution(s) {
    let count = 0; // 변환 횟수
    let zero = 0; // 제거한 0의 개수
    
    while(true) {
        if(s === "1") break; // "1"이 되면 종료
        
        const temp = [...s].map((item) => {
            if(item === "1") { // "1"이면 그대로 반환
                return "1"
            } else { // "0"이면 제거
                zero += 1;
            }
        }).join("");
        
        s = temp.length.toString(2); // temp의 길이를 2진수로 변환
        count += 1; // 변환 횟수 + 1
    }
    
    return [count, zero];
}