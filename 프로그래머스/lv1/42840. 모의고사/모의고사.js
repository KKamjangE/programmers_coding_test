function solution(answers) {
    // 수포자 패턴
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    const ans = [0, 0, 0];

    answers.forEach((value, index) => {
        patterns.forEach((pattern, patternIndex) => {
            if (pattern[index % pattern.length] === value) {
                // 맞춘 문제 수
                ans[patternIndex] += 1;
            }
        });
    });

    const maxNum = Math.max(...ans); // 최대 정답 수

    return ans.reduce((result, item, index) => {
        if (item === maxNum) {
            result.push(index + 1);
        }
        return result;
    }, []);
}