function solution(binomial) {
    const [num1, op, num2] = binomial.split(' ')
    const a = Number(num1)
    const b = Number(num2)
    switch(op){
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
    }
}