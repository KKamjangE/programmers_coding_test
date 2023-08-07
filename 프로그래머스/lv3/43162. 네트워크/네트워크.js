function solution(n, computers) {
    let ans = 0;
    
    const visited = new Array(n).fill(false); // 방문 처리 배열
    
    const BFS = (start) => {
        const que = [start];
        visited[start] = true;
        
        while(que.length > 0){
            const q = que.shift();
            computers[q].forEach((value, index) => {
                if(!visited[index] && value === 1){ // 방문 하지 않았고 연결되어 있다면
                    que.push(index);
                    visited[index] = true; // 방문처리
                }
            })
        }
        return 1; // 네트워크 + 1
    }
    
    for(const computer of computers){
        computer.forEach((value, index) => {
            if(!visited[index] && value === 1){
                // 방문하지 않았고 다른 컴퓨터와 연결되어 있다면
                ans += BFS(index);
            }
        });
    }
    
    return ans;
}