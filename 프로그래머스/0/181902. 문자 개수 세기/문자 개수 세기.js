function solution(my_string) {
    const result = Array.from({length: 52}, () => 0)
    my_string.split("").forEach((item) => result[item.charCodeAt() - (item === item.toUpperCase() ? 65 : 71)] += 1)
    return result
}
