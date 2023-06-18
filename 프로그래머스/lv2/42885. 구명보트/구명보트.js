function solution(people, limit) {
    let ans = people.length; // 최대 보트 사용 수로 초기화
    people.sort((a, b) => a - b); // 오름차순 정렬

    let left = 0; // 몸무게가 제일 낮은 사람
    let right = people.length - 1; // 몸무게가 제일 높은 사람
    
    while(left < right){
        if(people[left] + people[right] <= limit){ // 2명이 함께 탈 수 있다면 몸무게 낮은 사람도 포함
            left += 1;
            ans -= 1; // 2명이 함께 보트를 사용헀다면 보트 사용 횟수 -1
        } // 어떤 경우에도 몸무게 높은 사람은 포함
        right -= 1;
    }
    
    return ans;
}