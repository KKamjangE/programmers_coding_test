function solution(progresses, speeds) {
    const stack = [];
    let day = 1;
    while(progresses.length > 0){
        let temp = 0;
        while(progresses[0] + day * speeds[0] >= 100){
            progresses.shift();
            speeds.shift();
            temp += 1;
        }
        if(temp > 0){
            stack.push(temp);    
        }
        day += 1;
    }
    return stack;
}