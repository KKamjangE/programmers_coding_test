function solution(str_list) {
    const L = str_list.indexOf('l')
    const R = str_list.indexOf("r")
    const RArr = str_list.slice(R + 1)
    const LArr = str_list.slice(0, L)
    if(L < 0 && R < 0) return []
    if(L < 0) return RArr
    if(R < 0) return LArr
    return L > R ? RArr : LArr
}
