function solution(n) {
    let sum = 0
    if(n % 2 === 0) {
        for(let i=0;i<=n;i++){
            sum += i % 2 === 0 ? i * i : 0
        }
    } else {
        for(let i=0;i<=n;i++){
            sum += i % 2 != 0 ? i : 0
        }
    }
    return sum;
}