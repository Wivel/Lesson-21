function addNull(num) {
    let str = String(num);
    if (str.length < 2) {
        str = '0' + str;
    }
    return str;
}