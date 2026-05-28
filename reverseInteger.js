//reverse an Integer
const reverse = (n) => {
    const nCopy = n;
    n = Math.abs(n);
    let rev = 0;
    while (n > 0) {
        const rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    let limit = Math.pow(2, 31);
    //can also be written as 
    //limit = 2**31
    if (rev < -limit || rev > limit) {
        return 0;
    }
    return (nCopy < 0) ? -rev : rev;
}

const m = -879;
console.log(reverse(m));
