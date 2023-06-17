function solution(s){
    if(s.length % 2 != 0) return false;
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "("){
            stack.push(s[i]);
        } else if(s[i] === ")") {
            if(stack.length === 0){
                return false;
            } else {
                stack.pop();    
            }
        }
    }

    return stack.length === 0 ? true : false;
}