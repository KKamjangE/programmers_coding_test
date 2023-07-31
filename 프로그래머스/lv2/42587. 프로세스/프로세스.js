function solution(priorities, location) {
    const ans = [];
    const que = priorities.map((value, index) => [value, index]); // 우선순위와 프로세스 순서 저장
    
    while(que.length){
        const temp = que.shift(); // 프로세스 하나 꺼냄
        if(que.length && que.some((ele) => ele[0] > temp[0])){ // 프로세스의 우선순위가 제일 높은지 확인
            que.push(temp); // 우선순위가 밀린다면 다시 큐에 추가
        } else {
            ans.push(temp); // 우선순위가 제일 높다면 실행
        }
    }
    
    return ans.findIndex((ele) => ele[1] === location) + 1; // 인덱스이기 때문에 + 1
}