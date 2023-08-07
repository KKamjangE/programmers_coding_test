function solution(begin, target, words) {
    const visited = new Array(words.length).fill(false); // 방문 처리 배열
    
    const que = [[begin, 0]]; // 시작 문자열, 변환된 횟수
        
    while(que.length > 0) {
        const [word, count] = que.shift();
        if(word === target) return count; // 타겟 문자와 같다면
        
        words.forEach((item, index) => {
            let temp = 0; // 다른 알파벳 개수 확인용 변수
            for(let i = 0; i < word.length; i++) { // 다른 알파벳 비교
                if(word[i] !== item[i]) temp += 1;
            }
            if(!visited[index] && temp === 1){ // 방문 하지 않았고 알파벳 개수가 1개만 다르다면
                que.push([item, count + 1]);
                visited[index] = true; // 방문 처리
            }
        });
    }
    
    return 0;
}