function solution(word) {
    let ans = 0;
    let flg = false; // DFS 중지 플래그
    const alpha = ["A", "E", "I", "O", "U"]; // 사전 배열
    
    const DFS = (str) => {
        if(flg || str.length > 5) return; // 중지 플래그가 true거나 문자열 길이가 5 이상이라면 return
        
        if(word === str) {
            // 사전의 단어와 동일하다면
            flg = true; // DFS 중지
            return;
        }
        ans += 1; // 사전 순서 + 1
        for(let i = 0; i < alpha.length; i++){
            // alpha배열 순회하면서 재귀 
            DFS(str + alpha[i]);
        }
    }
    
    DFS("")
    
    return ans;
}