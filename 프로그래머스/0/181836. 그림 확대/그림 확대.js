function solution(picture, k) {
    return picture.reduce((acc, curr) => {
        const str = [...curr].map((item) => item.repeat(k)).join('')
        return [...acc, ...Array.from({length: k}, () => str)]
    }, [])
}