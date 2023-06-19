function solution(begin, target, words) {
    let ans = 0;
    if(!words.includes(target)) return 0; // 문자열 배열안에 target이 없다면 0
    
    const visited = new Array(words.length).fill(false); // 방문 처리
    
    const BFS = (word, start) => {
        que = [[word, start]]; // 시작 문자열, 단계
        
        while(que.length > 0){
            const [q, count] = que.shift();
            if(q === target){ // 현재 문자열이 target과 같다면
                ans = count; // 몇 단계인지 저장
                break;
            }
            words.forEach((word, idx) => { // 문자열 배열 순회
                let diff = 0; // 다른 문자 개수
                for(let i = 0; i < q.length; i++){ // 문자열 순회
                    if(word[i] != q[i]){ // 현재 문자열과 문자가 다른지 비교
                        diff += 1;
                    }
                }
                if(diff === 1 && !visited[idx]){ // 다른 문자가 1개라면
                    visited[idx] = true; // 방문 처리
                    que.push([word, count + 1]); // 문자열, 단계 + 1
                }
            });
        }
    }
    
    BFS(begin, 0);
    
    return ans;
}