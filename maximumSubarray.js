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

//Approach - 2
//You are given an integer array nums consisting of n elements, and an integer k.
//Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 

var findMaxSubArray = function(nums, k){
	let sum =0;
  let maxSum = -5000;
  
  for(let i=0;i<k;i++){
  	sum += nums[i];
  }
  
  let j=k;
  let i=0;
  maxSum = sum;
  while(j<nums.length){
  	sum = sum -nums[i]+nums[j]
    j++;
    i++;
    maxSum = Math.max(sum,maxSum);
  	
  }
  return maxSum;
}

let nums3 = [1,12,-5,-6,50,3], 
k = 4

console.log(findMaxSubArray(nums3,k));
//4 min
