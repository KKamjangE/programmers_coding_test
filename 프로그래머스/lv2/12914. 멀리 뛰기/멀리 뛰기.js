function solution(n) {
    const F = new Array(n + 1).fill(0);
    F[0] = 1;
    F[1] = 1;
    for(let i = 2; i <= n; i++){
        F[i] = (F[i - 1] + F[i - 2]) % 1234567;
    }
    
    return F[F.length - 1];
}