function solution(k, dungeons) {
    let ans = 0; // 탐험한 던전 수
    const visited = new Array(dungeons.length).fill(false); // 방문처리 배열
    
    const DFS = (k, count) => {
        if(ans < count) ans = count; // 탐험한 던전 수가 더 많으면 갱신
        
        dungeons.forEach(([minK, conK], idx) => { // 던전 배열 순회
            if(minK <= k && !visited[idx]) { // 현재 피로도가 최소 피로도 이상이고 방문하지 않았다면
                visited[idx] = true; // 방문처리
                DFS(k - conK, count + 1); // 피로도 소모, 탐험한 던전 수 + 1
                visited[idx] = false; // 방문처리 해제
            }
        });
    };
    
    DFS(k, 0);
    
    return ans;
}