function solution(board, k) {
    let sum = 0
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            sum += i + j <= k ? board[i][j] : 0
        }
    }
    return sum
}