function solution(maps) {
    const maxY = maps.length; // 최대 y 값
    const maxX = maps[0].length; // 최대 x 값
    const dx = [0, 0, 1, -1]; // x 이동 값
    const dy = [1, -1, 0, 0]; // y 이동 값
    const visited = Array.from({length: maxY}, () => new Array(maxX).fill(-1)); // 방문 처리 배열 목적지에 도달할 수 없는 경우 -1을 반환해야하기 때문에 초기값을 -1로 지정
    
    const que = [[0,0]]; // 시작 좌표
    visited[0][0] = 1; // 시작 좌표값 1로 초기화
    
    while(que.length > 0) {
        const [y, x] = que.shift();
        for(let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(0 <= nx && nx < maxX && 0 <= ny && ny < maxY && visited[ny][nx] === -1 && maps[ny][nx] === 1) {
                // 최대 좌표를 넘지 않고 방문하지 않았고 벽으로 막혀있지 않다면
                que.push([ny, nx]); // 다음 좌표값 저장
                visited[ny][nx] = visited[y][x] + 1; // 현재 좌표값에서 + 1
            }
        }
    }
    
    return visited[maxY - 1][maxX - 1]; // 목적지 값 반환
}