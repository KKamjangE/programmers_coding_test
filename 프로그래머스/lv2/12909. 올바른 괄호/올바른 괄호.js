function solution(s){
    if(s.length % 2 !== 0) return false;
    
    const stack = [];
    
    for(const item of s){
        if(item === "(") { // 열린 괄호는 스택에 저장
            stack.push(item);
        }
        if(item === ")"){ // 닫힌 괄호일 때
            if(stack.length > 0){ // 스택에 요소가 있다면 pop
                stack.pop();
            } else { // 스택에 아무것도 없다면 올바르지 않은 괄호
                return false;
            }
        }
    }
    
    return stack.length > 0 ? false : true; // 스택에 아무것도 남아있지 않다면 올바른 괄호
}