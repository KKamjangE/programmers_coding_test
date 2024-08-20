function solution(num_list) {
    if(num_list.length > 10) {
        return num_list.reduce((prev, item) => prev + item, 0)
    } else {
        return num_list.reduce((prev, item) => prev * item, 1)
    }
}