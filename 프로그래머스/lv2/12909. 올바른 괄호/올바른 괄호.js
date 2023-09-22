function solution(s){
    
    let stack = 0;
    
    for(const item of s){
        if(item === "("){
            stack += 1;
        } else if(stack > 0 && item === ")"){
            stack -= 1;
        } else {
            return false;
        }
    }
    
    if(stack === 0) return true;
    else return false;
}