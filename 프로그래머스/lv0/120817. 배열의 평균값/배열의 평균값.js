function solution(numbers) {
    let answer = numbers.reduce((sum, curr) => sum + curr) / numbers.length;
    return answer;
}