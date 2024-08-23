function solution(str1, str2) {
    return str1.split("").map((item, index) => item+str2[index]).join("")
}