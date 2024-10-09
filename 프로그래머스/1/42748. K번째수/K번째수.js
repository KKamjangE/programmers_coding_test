function solution(array, commands) {
    return commands.reduce((acc, command) => {
        const [i, j, k] = command
        acc.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1])
        return acc
    }, [])
}