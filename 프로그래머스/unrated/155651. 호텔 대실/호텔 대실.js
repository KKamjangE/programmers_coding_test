function solution(book_time) {
    let ans = 0;
    const timeToMin = (str) => {
        const [hour, min] = str.split(":").map((value) => parseInt(value));
        return hour * 60 + min;
    }
    
    const timeLine = new Array(timeToMin("23:59") + 10).fill(0);
    book_time.forEach(([s, e]) => {
        const start = timeToMin(s);
        const end = timeToMin(e) + 9;
        
        for(let i = start; i <= end; i++){
            timeLine[i] += 1;
        }
    });
    
    return Math.max(...timeLine);
}