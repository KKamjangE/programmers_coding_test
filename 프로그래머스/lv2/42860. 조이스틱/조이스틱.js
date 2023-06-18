function solution(name) {
    let ans = 0;
    let move = name.length - 1; // 조이스틱 좌우 이동
    
    [...name].forEach((str, i) => {
        let code = str.charCodeAt(); // 현재 문자의 아스키코드
        ans += Math.min(code - 65, 91 - code); // 조이스틱 상하 이동
        
        let idx = i + 1; // 다음 문자로 조이스틱 이동
        
        while(name[idx] === "A" && idx < name.length){
            idx += 1;
        }
        
        move = Math.min(move, i * 2 + name.length - idx, i + 2 * (name.length - idx));
    });
    
    return ans + move;
}