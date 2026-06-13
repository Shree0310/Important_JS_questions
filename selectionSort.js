function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
      if(min != i){
        let x = arr[i];
        arr[i] = arr[min];
        arr[min] = x;
      }
    }
    return arr;
}
let arr = [4, 9, 1, 0, 2];
console.log(selectionSort(arr));
