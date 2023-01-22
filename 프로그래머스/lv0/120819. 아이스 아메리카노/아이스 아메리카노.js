function solution(money) {
    var answer = [];
    let AA = Math.floor(money/5500);
    answer.push(AA);
    answer.push(money-AA*5500);
    return answer;
}