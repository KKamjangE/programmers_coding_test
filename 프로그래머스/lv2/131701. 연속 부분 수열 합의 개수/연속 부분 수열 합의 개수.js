function solution(elements) {
    let ans = new Set(); // 중복 제거용 Set 자료구조
    
    for(let i = 1; i <= elements.length; i++) { // 순열의 길이
        let sum = 0; // 합
        for(let j = 0; j < elements.length; j++) { // 순열 순회
            if(j === 0) { // 순열의 첫번째일 때
                for(let k = 0; k < i; k++) { // 초기 합 구하기
                    sum += elements[k];
                }
            } else {
                sum -= elements[j - 1]; // 이전 값 빼기
                sum += elements[(j + i - 1) % elements.length]; // 다음 값 더하기
            }
            ans.add(sum);
        }
    }
    return ans.size;
}