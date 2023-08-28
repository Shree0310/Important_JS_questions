//Check if the given string i spallindrome
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
let str2 = "ollo";
console.log(pallindrome2(str2));

//using forEach loop
const pallindrome3 = (str) =>{
	let isPallindrome = true;
    str.split("").forEach((c,i)=>{
      if(c != str[str.length-i-1]){
	isPallindrome =false;
      }
    });
    
    return isPallindrome;
}
console.log(pallindrome2(str2));


//using every
const pallindrome4 = (str) => str.split("").every((c,i)=>c==str[str.length-i-1]);

console.log(pallindrome4(str2));
