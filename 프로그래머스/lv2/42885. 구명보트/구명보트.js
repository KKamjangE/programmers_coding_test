function solution(people, limit) {
    let boat = 0; // 두 사람이 한 보트에 타는 경우
    let left = 0;
    let right = people.length - 1;
    people.sort((a, b) => a - b); // 사람들 오름차순 정렬
    
    while(left < right) {
        if(people[left] + people[right] <= limit) {
            // 한 보트에 두 사람이 탈 수 있다면
            left++;
            right--;
            boat++;
        } else {
            // 무거운 사람 한명만
            right--;
        }
    }
    
    return people.length - boat;
}