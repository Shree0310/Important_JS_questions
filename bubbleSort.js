function bubbleSort(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false; // for optimisation
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let x;
                x = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = x;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return nums;
}

let arr = [4, 9, 1, 0, 2];
console.log(bubbleSort(arr));
