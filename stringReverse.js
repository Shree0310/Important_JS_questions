//Reverse a string
let str = "apple"
//using for loop, time: 4 mins
const reverseString = function(str){
	let strArr = str.split("");
  let temp;
  
  for(let i=0;i<strArr.length/2;i++){
  	temp= strArr[i];
    strArr[i]= strArr[strArr.length-i-1];
    strArr[strArr.length-i-1]= temp;
    
  }
  return strArr.join("");
}

console.log(reverseString(str));

//using map
let sen = "hello good morning";
console.log(sen.split(" ").map(word => word.split("").reverse().join("")).join(" "));

//using spread operator
console.log([...sen].reverse().join(""));
