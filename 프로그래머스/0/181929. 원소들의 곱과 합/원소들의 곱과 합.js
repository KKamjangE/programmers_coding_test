function solution(num_list) {
    return +(num_list.reduce((acc, curr) => acc * curr, 1) < Math.pow(num_list.reduce((acc, curr) => acc + curr, 0), 2));
}