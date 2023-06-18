function solution(maps) {
    const visited = Array.from({length: maps.length}, () => new Array(maps[0].length).fill(-1));
    
    const BFS = () => {
        const que = [[0, 0, 0]];
        visited[0][0] = 1;
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        
        while(que.length > 0){
            let [x, y] = que.shift();
            
            for(let i = 0; i < 4; i++){
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(0 <= nx && nx < maps[0].length && 0 <= ny && ny < maps.length && visited[ny][nx] === -1 && maps[ny][nx] === 1){
                    visited[ny][nx] = visited[y][x] + 1;
                    que.push([nx, ny]);
                }
            }
        }
    }
    
    BFS();
    
    return visited[maps.length - 1][maps[0].length - 1];
}