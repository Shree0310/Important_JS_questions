//Sum of all elements in an array using recursion
function arrSum(n){
  if(n == 0) return arr[n];
  return arr[n] + arrSum[n-1];
}
arr = [5, 3, 2, 0, 1, 2];
console.log(arr.length -1);


//sum of first n numbers
function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

//console.log(sum(10));
