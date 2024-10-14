function solution(phone_book) {
    return !phone_book.sort().some((item, index) => {
        if(!phone_book[index + 1]) return false
        return phone_book[index + 1].startsWith(item)
    })
}