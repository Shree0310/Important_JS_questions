
function pallindrome2(str){
	let strArr = str.split("");
  let n = strArr.length;
  
  for(i=0;i<n/2;i++){
  	if(strArr[i]!=strArr[n-i-1]){
    	return "Not a pallindrome";
    }
  }
  return "Pallindrome";
}

console.log(pallindrome2(str2));
