function solution(numbers) {
    const ans = new Set()
    const isPrime = (num) => {
        if(num < 2) return false
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num % i === 0) return false
        }
        return true
    }
    
    const DFS = (fix, arr) => {
        if(arr.length === 0) return
        arr.forEach((item, i) => {
            if(isPrime(+(fix + item))) {
                // console.log(fix + item)
                ans.add(+(fix + item))
            }
            const temp = [...arr]
            temp.splice(i, 1)
            DFS(fix + item, temp)
        })
    }
    DFS("", numbers.split(''))
    
    return ans.size
}
