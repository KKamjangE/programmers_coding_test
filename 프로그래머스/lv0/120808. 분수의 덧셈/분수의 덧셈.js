function solution(t1, b1, t2, b2) {
    let tnum = b1 * t2 + t1 * b2;
    let bnum = b1 * b2;

    for(let i = 1; i <= tnum; i++){
        if(tnum%i === 0 && bnum%i === 0)
            maximum = i;
    }

    return [tnum/maximum, bnum/maximum];
}