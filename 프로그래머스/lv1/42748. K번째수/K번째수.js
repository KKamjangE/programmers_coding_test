function solution(array, commands) {
    let ans = [];
    
    commands.forEach(([start, end, idx]) => {
        let tmp = array.slice(start - 1, end);
        tmp.sort((a, b) => a - b);
        ans.push(tmp[idx - 1])
    })
    
    return ans;
}