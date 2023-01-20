function solution(array) {
    let map = new Map();
    for(let i = 0; i <= Math.max(...array); i++){ // 가장 큰 값까지 요소를 만든다
        map.set(i, 0);
    }

    for(let j = 0; j < array.length; j++){ // 요소를 순회하면서 요소 값 해당 인덱스에 + 1
        map.set(array[j], map.get(array[j]) + 1);
    }

    let arr = Array.from(map.values()); // Map을 배열로 반환

    let max = Math.max(...arr); // arr에서 가장 큰 값

    if(arr.indexOf(max) !== arr.lastIndexOf(max)){ // 검색해서 인덱스로 중복 확인
        return -1;
    }else{
        return arr.indexOf(max);
    }
}