function solution(today, terms, privacies) {
    let ans = [];
    let term = {};
    
    const day = (time) => { // 날짜를 일수로 변환해주는 함수
        const [year, month, day] = time.split(".").map((value) => parseInt(value));
        return (year * 12 * 28) + (month * 28) + day;
    }
    
    const toDay = day(today); // 오늘 일수
    
    terms.forEach((value) => { // 약관 종류 별 일수
        [termCase, month] = value.split(" ")
        term[termCase] = parseInt(month) * 28;
    });
    
    privacies.forEach((value, idx) => {
        const [date, termCase] = value.split(" "); // 약관 날짜, 약관 종류
        const currDate = day(date); // 현재 약관 날짜
        
        if(currDate + term[termCase] <= toDay){ // 현재 약관 날짜 + 약관 종류 날짜 < 오늘 날짜
            ans.push(idx + 1); // 파기
        }
    });
    
    return ans;
}