//Given an array nums of size n, return the max occuring element.
 var majorityElement = function(nums) {
    let countMap = {};
    for(let i=0;i<nums.length;i++){
        if(countMap[nums[i]]){
            countMap[nums[i]]++;
        }
        else{
            countMap[nums[i]] =1;
        }
    }
    maxCount=0; res=-1;
    Object.keys(countMap).forEach(key =>{
        console.log(key, countMap[key]);
        if(maxCount<countMap[key]){
            res = key;
            maxCount = countMap[key];
        }
    })
    return res;
}; 
