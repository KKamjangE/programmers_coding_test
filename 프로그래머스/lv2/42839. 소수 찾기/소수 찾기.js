function solution(numbers) {
    const ans = new Set();
    
    const isPrime = (num) => {
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    const DFS = (numArr, fixNum) => {
        if(numArr.length === 0) return;
        
        for(let i = 0; i < numArr.length; i++){
            if(isPrime(parseInt(fixNum + numArr[i]))) {
                ans.add(parseInt(fixNum + numArr[i]));
            }
            
            const temp = [...numArr];
            temp.splice(i, 1);
            DFS(temp, fixNum + numArr[i]);
        }
    };
    
    DFS(numbers.split(""), "");
    
    return ans.size;
}