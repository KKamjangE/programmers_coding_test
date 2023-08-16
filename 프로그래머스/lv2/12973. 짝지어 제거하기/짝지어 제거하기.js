function solution(s) {
    const stack = [];
    
    for(const str of s){
        if(stack.length === 0){ // 스택에 요소가 없으면 추가
            stack.push(str);
            continue;
        }
        if(stack[stack.length - 1] === str){ // 스택 맨 위 요소와 같으면
            stack.pop(); // 제거
        } else {
            stack.push(str); // 다르면 추가
        }
    }
    
    return stack.length === 0 ? 1 : 0; // 스택에 요소가 없으면 1 아니면 0
}