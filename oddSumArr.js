function oddSum(n) {
    let isOdd = (arr[n] % 2 != 0);
        if (n == 0){
          return isOdd ? arr[n]:  0;
        }
      return ((isOdd ? arr[n] : 0) + oddSum(n-1));
}
arr = [5, 3, 2, 0, 1, 2];
console.log(oddSum(arr.length - 1));
