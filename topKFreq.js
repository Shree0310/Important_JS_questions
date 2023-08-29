//top k freq
var topKFreq = function(arr,k){
	let countMap={};
  for(let i=0;i<arr.length;i++){
  	if(countMap[arr[i]]){
    	countMap[arr[i]]++;
    }
    else{
    	countMap[arr[i]]=1;
    }
  }
  
  const freqArr = Object.keys(countMap).sort((a,b)=>countMap[a]-countMap[b]);
  console.log(freqArr);
  return freqArr.splice(0,k);
}
let m =2;
console.log(topKFreq(arrNew6,m))
