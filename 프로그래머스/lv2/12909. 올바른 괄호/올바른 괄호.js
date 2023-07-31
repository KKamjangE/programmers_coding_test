function solution(s){
    const stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.push("(");
        } else if (stack.length > 0 && s[i] === ")"){
            stack.pop();
        } else {
            return false;
        }
    }
    
    if (stack.length === 0){
        return true;
    } else {
        return false;
    }
}