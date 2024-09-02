function solution(my_string, is_suffix) {
    return +Boolean(my_string.split("").map((_, index) => my_string.slice(index)).find((item) => item === is_suffix))
}