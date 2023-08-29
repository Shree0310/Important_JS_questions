//Given an integer array nums, find the subarray with the largest sum, and return its sum.
//Maximum Subarray
var maxSubArray = function(nums){
	let sum = 0;
  let maxSum = -5000;
  for(let i=0;i<nums.length; i++){
  	sum += nums[i];
    sum = Math.max(sum,nums[i]);
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}
let nums2 = [5,4,-1,7,8];
console.log(maxSubArray(nums2));
