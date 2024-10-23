function solution(citations) {
    citations.sort((a, b) => b - a)
    let ans = 0
    for(let i=0;i<citations.length;i++) {
        if(i < citations[i]) ans++
        else break
    }
    return ans
}