function solution(n, computers) {
    let ans = 0;
    const visited = new Array(n).fill(false);

    
    const BFS = (start) => {
        const que = [start];
        visited[start] = true;
        
        while(que.length > 0){
            q = que.shift();
            computers[q].forEach((v, idx) => {
                if(!visited[idx] && v === 1){
                    visited[idx] = true;
                    que.push(idx);
                }
            })
        }
    }
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            BFS(i);
            ans += 1;
        }
    }
    
    return ans;
}