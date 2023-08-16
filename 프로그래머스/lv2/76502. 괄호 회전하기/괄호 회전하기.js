function solution(s) {
    let ans = 0;
    
    const check = (arr) => { // 올바른 괄호 문자열인지 확인하는 함수
        const stack = [];
        for(const item of arr) {
            if(item === "[" || item === "(" || item === "{"){
                stack.push(item);
            }
            if(item === ")"){
                if(stack[stack.length - 1] === "(") stack.pop();
                else return 0
            }
            if(item === "]"){
                if(stack[stack.length - 1] === "[") stack.pop();
                else return 0
            }
            if(item === "}"){
                if(stack[stack.length - 1] === "{") stack.pop();
                else return 0
            }
        }
        return stack.length === 0 ? 1 : 0;
    }
    
    for(let i = 0; i < s.length; i++){ // 문자열 길이만큼 반복
        ans += check(s); // 올바른 괄호 문자열이라면 + 1
        s = s.substring(1) + s.substring(0, 1); // 맨 앞의 문자를 맨 뒤로
    }
    
    return ans;
}