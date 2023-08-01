function solution(array, commands) {
    const ans = [];
    commands.forEach(([start, end, index]) => {
        const temp = array.slice(start - 1, end);
        temp.sort((a, b) => a - b);
        ans.push(temp[index - 1]);
    });
    
    return ans;
}