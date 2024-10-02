function solution(date1, date2) {
    const convertArrToDate = (date) => {
        return new Date(date[0], date[1], date[2])
    }
    return +(convertArrToDate(date1) < convertArrToDate(date2))
}
