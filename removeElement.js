var removeElement = function(nums, val) {
    let x = 0;
    for (let i=0; i<nums.length; i++){
        if(nums[i] != val){
            nums[x] = nums[i];
            x = x+ 1;
        }
    }
    return x;
};

//Input: nums = [0,1,2,2,3,0,4,2], val = 2
//Output: 5, nums = [0,1,4,0,3,_,_,_]
