

//Approach 1 :sort the strings and then compare them
const checkAnagrams = function(str1, str2){
	let n1 = str1.length;
  let n2 = str2.length;
  
  if(n1!=n2){
  	return false;
  }
  
  let strArr1 = str1.split("");
  let strArr2 = str2.split("");
  
  for(let i =0;i<n1;i++){
  	if(strArr1.sort()[i]!=strArr2.sort()[i]){
    	return false;
    }
  }
  return true;
   
}

console.log(checkAnagrams("test","estt"));

//Approach 2 : by creating two maps,  time taken: 5 min
const checkAnagrams2 = function(str1, str2){
	let strMap1 = {};
  let strMap2 = {};
  
  for(let i=0; i<str1.length; i++){
  	if(strMap1[str1[i]]){
    	strMap1[str1[i]]++;
    }
    else{
    	strMap1[str1[i]] = 1;
    }
  }
  
  for(let i=0; i<str2.length; i++){
  	if(strMap2[str2[i]]){
    	strMap2[str2[i]]++;
    }
    else{
    	strMap2[str2[i]] = 1;
    }
  }
  
  for(let key in strMap1){
  	if(strMap1[key]!=strMap2[key]){
    	return false;
    }
  }
  return true;
  
  
}
console.log(checkAnagrams2("test","estt"));
