//Find the longest substring without repeating characters
let strToCheck = "abcabcbb";
const longSub = (str) =>{
	let arr = str.split("");
  if(arr.length ==0){
  	return 0;
  }
  let i=0;
  let j=1;
  let length =0;
  let maxLength =0;
  let subMap={};
  let n = arr.length;
  
  subMap[arr[i]] = i;
  
  while(i<n && j<n){
  	if(subMap[arr[j]]>=i){
    	length = j-i;
      i = subMap[arr[j]]+1;
    }
    else{
    	length = j-i+1;
    }
  	subMap[arr[j]] = j;
    j++;
    
    if(length>maxLength){
    	maxLength = length;
    }
  }
  return maxLength;
}

console.log(longSub(strToCheck));

