function solution(s) {
    const ans = [];
    const arr = []; // 문자열을 변환해서 담을 배열
    
    const temp = s.replace("}}", "").replace("{{", "").split("},{"); // 감싸는 {{}} 없애고 },{를 기준으로 배열로 변환
    
    temp.forEach((item) => {
        arr.push(item.split(",")) // ,를 기준으로 나눠서 arr에 저장
    })
    
    arr.sort((a, b) => a.length - b.length); // 배열의 길이 기준 오름차순 정렬
    
    for(const str of arr){ // 2차원 배열이기 때문에 2중 for문
        for(let i = 0; i < str.length; i++){
            if(!ans.includes(parseInt(str[i]))){ // 현재 문자(숫자)가 포함되지 않았다면
                ans.push(parseInt(str[i])); // 현재 문자를 추가
            }
        }
    }
    
    return ans
}