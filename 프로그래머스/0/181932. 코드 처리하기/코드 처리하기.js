function solution(code) {
    let mode = false;
    let ret = ""
    code.split("").forEach((item, index) => {
        if(item === "1") {
            mode = !mode
        } else {
            if(mode) ret += index % 2 != 0 ? item : ""
            else ret += index % 2 === 0 ? item : ""
        }
    })
    return ret ? ret : "EMPTY"
}
