function solution(numbers) {
    let ans = new Set(); // 중복 제거를 위한 Set 자료구조
    
    const isPrime = (num) => { // 소수 판별 함수
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        
        return true;
    }
    
    const DFS = (fixNum, array) => {
        if(array.length === 0) return; // 더 이상 배열의 요소가 없다면 리턴
        
        for(let i = 0; i < array.length; i++){
            // 고정된 숫자와 다음 숫자를 더한 값이 소수일 때
            if(isPrime(parseInt(fixNum + array[i]))){
                ans.add(parseInt(fixNum + array[i]));
            }
            const temp = [...array];
            temp.splice(i, 1); // 위에서 더한 다음 숫자를 제외한 배열
            DFS(fixNum + array[i], temp); // 고정된 숫자에 다음 숫자 더하기, 다음 숫자를 제외한 배열
        }
    }
    
    DFS("", numbers.split(""));
    
    return ans.size; // 중복이 제거된 Set의 길이
}