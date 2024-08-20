function solution(num_list, n) {
    return num_list.filter((item, index) => index % n === 0 )
}