function solution(numbers) {
    var answer = [];
    numbers.reduce((preVal, currVal) => {
        currVal *= 2;
        answer.push(currVal);
    }, 0)
    return answer;
}