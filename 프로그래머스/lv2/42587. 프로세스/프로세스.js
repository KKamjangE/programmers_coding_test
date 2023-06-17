function solution(priorities, location) {
    const ans = [];
    const stack = priorities.map((value, index) => [value, index]);

    while (stack.length > 0) {
        let tmp = stack.shift();
        if (stack.length > 0 && stack.some((ele) => ele[0] > tmp[0])) {
            stack.push(tmp);
        } else {
            ans.push(tmp);
        }
    }
    
    return ans.findIndex((ele) => ele[1] === location) + 1;
}