function solution(my_string, index_list) {
    return index_list.reduce((acc, curr) => acc += my_string[curr], '')
}