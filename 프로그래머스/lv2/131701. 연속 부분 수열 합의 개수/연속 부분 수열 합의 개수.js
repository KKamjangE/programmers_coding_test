function solution(elements) {
    const ans = new Set(); // 중복 제거를 위한 Set
    const temp = elements.concat(elements); // 원형 수열로 사용할 배열 생성
    
    for(let i = 0; i < elements.length; i++){ // 부분 수열의 길이
        let sum = 0;
        for(let j = 0; j < elements.length; j++){ // 수열 순회
            sum += temp[i + j];
            ans.add(sum);
        }
    }
    
    return ans.size;
}