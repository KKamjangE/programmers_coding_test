function solution(num_list) {
    return num_list.length > 10 ? num_list.reduce((a, c) => a + c, 0) : num_list.reduce((a, c) => a * c, 1)
}