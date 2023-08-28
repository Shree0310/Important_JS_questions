

//Approach 1 :sort the strings and then compare them
const checkAnagrams = function(str1, str2){
	let n1 = str1.length;
  let n2 = str2.length;
  
  if(n1!=n2){
  	return false;
  }
  
  let strArr1 = str1.split("");
  let strArr2 = str2.split("");
  
  let sortStr1 = strArr1.sort();
  let sortStr2 = strArr2.sort();
  console.log(sortStr1);
  console.log(sortStr2);

  for(let i =0;i<n1;i++){
  	if(sortStr1[i]!=sortStr2[i]){
    	return false;
    }
  }
  return true;
   
}

console.log(checkAnagrams("test","estt"));
