//write a code and check if any anagram of a string is palindrome or not
var isAngrmPldrm = function(str){
	let strMap = {};
  for(let i=0;i<str.length;i++){
  	if(strMap[str[i]]){
    	strMap[str[i]]++;
    }
    else{
    strMap[str[i]] = 1;
    }
  }
  console.log(strMap);
  // Traverse the str map and if the count on map has more than one odd values, return false. Otherwise, return true.
  let oddCount =0;
  for(let key in strMap){
   console.log(key);
   if(strMap[key]%2 !== 0){
   	 oddCount++;
   }
  }
  console.log(oddCount);
  if(oddCount>1){
  	return false;
  }
  else{
  return true;
  }
}
console.log(isAngrmPldrm("adamm"));
