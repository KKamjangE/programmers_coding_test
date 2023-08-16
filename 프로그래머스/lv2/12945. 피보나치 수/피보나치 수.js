function solution(n) {
    const F = new Array(n + 1).fill(0); // 0으로 채운 배열
    F[1] = 1; // 1번째 요소는 1
    
    for(let i = 2; i < F.length; i++){ // i - 1과 i - 2를 더해가며 i번째 요소 채우기
        F[i] = (F[i - 1] + F[i - 2]) % 1234567;
    }
    
    return F[F.length - 1];
}