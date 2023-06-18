function solution(numbers) {
    const ans = numbers.map((num) => num + "").sort((a, b) => b + a - (a + b)).join("");
    return ans[0] === "0" ? "0" : ans;
}