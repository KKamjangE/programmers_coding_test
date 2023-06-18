function solution(word) {
    let ans = 0;
    let flg = false;
    let count = 0;
    const alpha = ["A", "E", "I", "O", "U"];
    
    const DFS = (str) => {
        if(flg || str.length > 5) return;
        
        if(str === word){
            ans = count;
            flg = true;
            return;
        }
        
        count += 1;
        for(let i = 0; i < alpha.length; i++){
            DFS(str + alpha[i]);
        }
    }
    
    DFS("");
    
    return ans;
}