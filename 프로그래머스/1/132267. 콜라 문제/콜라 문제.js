function solution(a, b, n) {
    function recursion(n) {
        if(n < a) return 0
        const cola = Math.floor(n / a) * b
        const left = n % a
        return cola + recursion(cola + left)
    }
    
    return recursion(n)
}