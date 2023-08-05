function solution(n, lost, reserve) {
    const child = new Array(n + 1).fill(0); // 학생 배열
    // 앞 사람부터 체육복을 나눠주어야 하기 때문에 index + 1
    reserve.forEach((value) => {
        // 체육복을 하나 더 가지고 있는 학생은 + 1
        child[value] += 1;
    });
    lost.forEach((value) => {
        // 체육복이 없는 학생은 - 1
        child[value] -= 1;
    });
    
    for(let i = 1; i < child.length; i++){
        if(child[i] === 1){ // 현재 학생이 체육복을 하나 더 가지고 있다면
            if(child[i - 1] < 0) { // 앞사람 확인
                child[i] = 0;
                child[i - 1] = 0;
            } else if (child[i + 1] < 0){ // 뒷사람 확인
                child[i] = 0;
                child[i + 1] = 0;
            }
        }
    }
    
    // 체육복이 있는 학생들 수 계산 배열을 index + 1로 만들었기 때문에 초기값을 -1로 설정
    return child.reduce((result, item) => {
        if(item >= 0) result += 1;
        return result;
    }, -1);
}