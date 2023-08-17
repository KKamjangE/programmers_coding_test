function solution(arr1, arr2) {
    const ans = [];
    
    for(let i = 0; i < arr1.length; i++){
        const result = [];
        for(let j = 0; j < arr2[0].length; j++){
            let temp = 0;
            for(let k = 0; k < arr2.length; k++){
                temp += arr1[i][k] * arr2[k][j];
            }
            result.push(temp);
        }
        ans.push(result);
    }
    
    return ans;
}