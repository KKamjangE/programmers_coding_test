function solution(rank, attendance) {
    const [a, b, c] = rank.map((item, index) => ({rank: item, num: index})).filter((_, idx) => attendance[idx]).sort((a, b) => a.rank - b.rank)
    return 10000 * a.num + 100 * b.num + c.num
}