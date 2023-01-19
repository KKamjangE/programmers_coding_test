function solution(n, k) {
    let service = Math.floor(n/10);
    k -= service;
    answer = n * 12000 + k * 2000;
    return answer;
}