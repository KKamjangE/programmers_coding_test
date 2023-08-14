function solution(s) {
    let ans = 0;
    const arr = s.split(" ");
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    return `${min} ${max}`;
}