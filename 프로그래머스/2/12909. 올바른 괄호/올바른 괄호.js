function solution(s){
    if(s.length % 2 != 0) return false
    
    return [...s].reduce((acc, curr) => {
        if(curr === '(') acc.push(curr)
        if(curr === ')' && acc.length > 0) acc.pop()
        return acc
    }, []).length === 0
}