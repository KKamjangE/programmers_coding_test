function solution(arr)
{
    const ans = [];

    arr.forEach((val) => {
        if(ans.length === 0) {
            ans.push(val)
        } else {
            if(ans[ans.length-1] != val) ans.push(val);    
        }
    })
    
    return ans;
}