function solution(priorities, location) {
    const ans = [];
    const que = priorities.map((item, idx) => [item, idx]);
    
    while(que.length > 0){
        const temp = que.shift();
        if(que.length > 0 && que.some((item) => item[0] > temp[0])){
            que.push(temp);
        }else{
            ans.push(temp);
        }
    }
    
    return ans.findIndex((item) => item[1] === location) + 1;
}