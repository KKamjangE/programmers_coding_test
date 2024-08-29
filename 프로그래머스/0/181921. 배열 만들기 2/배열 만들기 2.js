function solution(l, r) {
    const arr = []
    for(let num=l;num<=r;num++){
        if((num + "").split("").every((item) => item === "5" || item === "0")) arr.push(num)
    }
    
    if(arr.length === 0) arr.push(-1)
    
    return arr
}