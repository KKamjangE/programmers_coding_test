function solution(number, k) {
    const ans = [];
    
    [...number].forEach((num) => {
        while(k > 0 && ans && ans[ans.length - 1] < num){
            ans.pop();
            k -= 1;
        }
        ans.push(num);    
    });
    
    
    return ans.slice(0, ans.length - k).join("");
}