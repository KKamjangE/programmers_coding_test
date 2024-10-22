function solution(numbers) {
    const ans = numbers.map((item) => item + '').sort((a, b) => (b + a) - (a + b)).join("")
    return ans.startsWith('0') ? '0' : ans
}