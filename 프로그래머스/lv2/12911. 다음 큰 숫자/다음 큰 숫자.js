function solution(n) {
    let ans = n;
    
    const binN = n.toString(2).split("").filter((item) => item === "1").length; // 2진수 1의 갯수
    let binT = 0;
    
    while(binN !== binT) {
        ans += 1;
        binT = ans.toString(2).split("").filter((item) => item === "1").length; // 2진수 1의 갯수
    }
    
    return ans;
}