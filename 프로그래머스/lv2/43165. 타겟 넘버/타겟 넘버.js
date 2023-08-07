function solution(numbers, target) {
    let ans = 0;
    
    const DFS = (count, depth) => {
        if(numbers.length === depth) {
            // numbers 배열의 마지막 인덱스까지 도달했다면
            if(count === target){
                // 현재 숫자가 타겟과 같다면
                ans += 1;
            }
            return;
        }
        DFS(count - numbers[depth], depth + 1); // 현재 값에서 뺀 경우
        DFS(count + numbers[depth], depth + 1); // 현재 값에서 더한 경우
    }
    
    DFS(0, 0);
    
    return ans;
}