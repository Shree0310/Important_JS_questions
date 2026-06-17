function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

//Helper function to b used in mergeSort
function merge(arr1, arr2) {
    let resultArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultArr.push(arr1[i]);
            i++;
        }
        else {
            resultArr.push(arr2[j]);
            j++;
        }
        return [...resultArr, ...arr1.slice(i), ...arr2.slice(j)];
    }
}
let arr = [4, 9, 1, 0, 2];
console.log(mergeSort(arr));
