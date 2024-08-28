function solution(n, control) {
    const controler = {
        "w": 1,
        "s": -1,
        "d": 10,
        'a': -10
    }

    return [...control].reduce((acc, curr) => acc + controler[curr] , n);
}