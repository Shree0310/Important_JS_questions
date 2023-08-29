//Most frequent word in an array of strings
let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
let arrNew6 = ["hello", "mam", "hello", "you","hello","you","mad","you","hello"];
var mostFreqWord = function(para){
	let arr = para.split(' ');
  console.log(arr);
	let countArr = {};
  for(let i=0;i<arr.length;i++){
  	if(countArr[arr[i]]){
    	countArr[arr[i]]++;
    }
    else{
    	countArr[arr[i]]=1
    }
  }
  console.log(countArr);
  let maxCount=0; let res=-1;
  Object.keys(countArr).forEach(key=>{
  	if(countArr[key]>maxCount){
    	res = key;
      maxCount = countArr[key];
    }
  });
  return res;
}
console.log(mostFreqWord(paragraph));

//Given an array of strings words and an integer k, return the k most frequent strings.
