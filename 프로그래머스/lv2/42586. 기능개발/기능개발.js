function solution(progresses, speeds) {
    const ans = [];
    
    let index = 0; // 기능 순번
    let day = 0; // 날짜
    
    while(progresses.length > index){
        let complete = 0; // 배포 가능한 기능 수
        day += 1;
        while(progresses[index] + speeds[index] * day >= 100){ // 현재 기능이 완료되었다면
            index += 1; // 다음 기능
            complete += 1 // 완료 + 1
        }
        if(complete > 0){ // 완료된 기능이 있다면
            ans.push(complete); // 배포
        }
    }
    
    return ans;
}