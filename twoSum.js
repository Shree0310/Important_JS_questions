
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function(nums, target){
	let numsMap = {};
  for(let i=0;i<nums.length;i++){
    let diff = target - nums[i];
    if(numsMap[diff]!=undefined){
    	return [numsMap[diff],i];
    }
    else{
    	numsMap[nums[i]] = i;
    }
  }
}

let nums = [3,3];
let target = 6
console.log(twoSum(nums, target));
