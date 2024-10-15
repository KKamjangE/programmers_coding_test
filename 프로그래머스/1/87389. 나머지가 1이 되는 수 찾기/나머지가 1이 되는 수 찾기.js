function solution(n) {
    let x = 1;
    while(1){
        if(n % x === 1) break
        x++
    }
    return x
}