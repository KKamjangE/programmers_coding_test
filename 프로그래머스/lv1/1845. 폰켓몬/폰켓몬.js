function solution(nums) {
    let ans = [... new Set(nums)];
    let n = nums.length / 2;
    
    if(ans.length >= n){
        return n;
    }else {
        return ans.length;
    }
}