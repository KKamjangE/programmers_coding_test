function solution(cacheSize, cities) {
  let ans = 0;
  let cache = [];
  if (cacheSize === 0) return cities.length * 5;
  cities = cities.map((value) => value.toLowerCase());

  cities.forEach((value) => {
    if (cache.indexOf(value) === -1) {
      if (cache.length < cacheSize) {
        cache.push(value);
      } else if (cache.length === cacheSize) {
        cache.shift();
        cache.push(value);
      }
      ans += 5;
    } else {
      cache.splice(cache.indexOf(value), 1);
      cache.push(value);
      ans += 1;
    }
  });

  return ans;
}