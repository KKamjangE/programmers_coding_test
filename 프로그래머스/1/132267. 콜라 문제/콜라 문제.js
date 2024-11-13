function solution(a, b, n) {
    function recursion(n) {
        console.log('n', n)
        if(n < a) return 0
        const recycle = Math.floor(n / a)
        const cola = recycle * b
        return cola + recursion(cola + n % a)
    }
    
    return recursion(n)
}
