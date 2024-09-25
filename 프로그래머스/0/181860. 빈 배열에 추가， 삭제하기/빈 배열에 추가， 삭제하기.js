function solution(arr, flag) {
    return arr.reduce((acc, curr, index) => {
        if(flag[index]){
            return [...acc, ...Array.from({length: curr * 2}, () => curr)]
        } else {
            return acc.slice(0, acc.length-curr)
        }
    }, [])
}