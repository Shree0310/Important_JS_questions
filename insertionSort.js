function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (curr < arr[prev] && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}
let arr = [4, 9, 1, 0, 2];
console.log(insertionSort(arr));
