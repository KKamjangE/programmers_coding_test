function solution(number, k) {
    const ans = [];
    
    number.split("").forEach((num) => {
        while(k > 0 && ans.length > 0 && ans[ans.length - 1] < num){
            // k가 남았고 ans의 마지막 값보다 현재 num이 클 때
            ans.pop(); // 마지막 값 제거
            k -= 1;
        }
        ans.push(num); // 현재 요소 추가
    });
    
    // k가 남아있다면 k개 만큼 맨 뒤 숫자 제거
    if(k > 0) ans.splice(ans.length - k);
    
    return ans.join(""); // 배열 문자열로 변환해서 반환
}