function solution(people, limit) {
    let ans = people.length;
    people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length - 1;
    while(left < right) {
        if(people[left] + people[right] <= limit){
            ans -= 1;
            right -= 1;
        }
        left += 1;
    }
    
    return ans;
}