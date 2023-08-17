function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    let ans = 0;
    const cache = [];
    cities = cities.map((item) => item.toLowerCase());
    
    for(const item of cities){
        if(cache.indexOf(item) === -1){ // 캐시에 동일한 데이터가 없다면
            if(cache.length < cacheSize){ // 캐시 공간이 남아있다면
                cache.push(item); // 캐시에 저장
            } else {
                cache.shift(); // 캐시에서 오래된 데이터 제거
                cache.push(item); // 캐시에 저장
            }
            ans += 5;
        } else { // 캐시에 동일한 데이터가 있다면
            cache.splice(cache.indexOf(item), 1); // 해당 데이터 제거
            cache.push(item); // 캐시에 저장
            ans += 1;
        }
    }
    
    return ans;
}