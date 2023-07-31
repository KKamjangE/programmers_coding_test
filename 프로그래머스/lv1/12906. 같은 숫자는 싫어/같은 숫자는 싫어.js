function solution(arr) {
    const stack = [];
    arr.forEach((value) => {
        if(stack[stack.length - 1] !== value){
            stack.push(value);
        }
    });
    
    return stack;
}