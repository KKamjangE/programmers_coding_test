function solution(want, number, discount) {
    let ans = 0;
    
    const isMatch = (dis) => { // 모두 할인 받을 수 있는지 확인하는 함수
        const obj = new Map(); // (할인 제품: 수량) 객체
        dis.forEach((item) => obj.set(item, (obj.get(item) || 0) + 1));
        for(let i = 0; i < want.length; i++){
            if(obj.get(want[i]) !== number[i]) return false; // 원하는 제품의 개수와 다르다면 false
        }
        return true;
    }
    
    for(let i = 0; i <= discount.length - 10; i++){ // number의 원소의 합은 10
        const dis = discount.slice(i, i + 10); // 슬라이딩 윈도우 형태로 순회 (i 포함 10개 요소 자르기)
        if(isMatch(dis)) ans += 1;
    }
    
    return ans;
}