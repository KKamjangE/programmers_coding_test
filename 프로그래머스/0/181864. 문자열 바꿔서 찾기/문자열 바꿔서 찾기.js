function solution(myString, pat) {
    return +[...myString].map((item) => item === "A" ? "B" : "A").join('').includes(pat)
}