//flatten an array of any depth
//Using recursion
let deepArr = [1,[2,[3,[4,[5]]]]];
function flattenArr(arr){
	if(arr.length==1){
  	return arr;
  }
  let flatArr=[];
  for(let i=0;i<arr.length;i++){
  	if(typeof(arr[i])==="object"){
    	let x = flattenArr(arr[i]);
      flatArr = flatArr.concat(x);
    }
    else{
    	flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

console.log(flattenArr(deepArr));
