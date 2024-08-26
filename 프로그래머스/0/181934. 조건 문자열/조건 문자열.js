function solution(ineq, eq, n, m) {
    switch(ineq+eq) {
        case ">=":
            return +(n >= m);
        case "<=":
            return +(n <= m);
        case ">!":
            return +(n > m);
        case "<!":
            return +(n < m);
    }
}