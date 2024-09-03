function solution(q, r, code) {
   return [...code].filter((item, index) => index % q === r).join("")
}