function solution(myStr) {
    const result = myStr.split(/[abc]/).filter((i) => i)
    return result.length === 0 ? ["EMPTY"] : result
}