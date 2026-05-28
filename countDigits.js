const countDigits = (Num) => {
    let count = 0;
    if (Num == 0) return 1;
    Num = Math.abs(Num);
    while (Num > 0) {
        Num = Math.floor(Num / 10);
        count++;
    }
    return count;
}

const Num = -532678;
console.log(countDigits(Num));
