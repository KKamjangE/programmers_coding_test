function solution(k, dungeons) {
    let ans = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    const DFS = (currK, count) => {
        if(ans < count) ans = count;
        
        dungeons.forEach(([minK, conK], idx) => {
            if(minK <= currK && !visited[idx]){
                visited[idx] = true;
                DFS(currK - conK, count + 1);
                visited[idx] = false;
            }
        })
    }
    
    DFS(k, 0);
    
    return ans;
}