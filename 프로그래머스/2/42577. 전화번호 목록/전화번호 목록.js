function solution(phone_book) {
    return !phone_book.sort().some((item, index) => {
        if(index === phone_book.length - 1) return false
        return phone_book[index + 1].startsWith(phone_book[index])
    })
}
