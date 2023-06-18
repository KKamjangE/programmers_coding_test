function solution(numbers) {
    let ans = new Set();
    
    const prime = (num) => {
        if(num < 2) return false;
        
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    const DFS = (numArr, fixNum) => {
        if(numArr.length === 0) return;
        
        for(let i = 0; i < numArr.length; i++){
            if(prime(parseInt(fixNum + numArr[i]))) ans.add(parseInt(fixNum + numArr[i]));
            
            const tmp = [...numArr];
            tmp.splice(i, 1);
            DFS(tmp, fixNum + numArr[i]);
        }
    }

    DFS(numbers.split(""), "");
    console.log(ans);
    return ans.size;
}