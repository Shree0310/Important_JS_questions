//Binary Search
let numsSerach = [-1,0,3,5,9,12], targetSearch = 9

const search = (nums,target)=>{
	let start = 0;
  let n = nums.length;
  let end = n-1;
  
 
  //let sortAr = nums.sort();
  
  while(start<=end){
   let mid = Math.floor((end+start)/2);
    if(target==nums[mid]){
      return mid;
    }
    
  	else if(target> nums[mid]){
    	start = mid+1;
    }
    else if(target< nums[mid]){
    	end = mid-1;
    }
  }
  return -1;
}

console.log(search(numsSerach,targetSearch));
