function solution(A,B){
    A.sort((a, b) => a - b); // 오름차순 정렬
    B.sort((a, b) => b - a); // 내림차순 정렬
    return A.reduce((result, value, idx) => result += value * B[idx], 0); // 곱한값 연산
}