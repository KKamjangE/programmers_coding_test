function solution(progresses, speeds) {
    let ans = [];
    let day = 1;
    let end = 0;
    let index = 0;
    
    while(progresses.length > index){
        end = 0;
        while(progresses[index] + (speeds[index] * day) >= 100){
            end++;
            index++;
        }
        if(end > 0){
            ans.push(end);
        }
        day++;
    }
    
    return ans;
}