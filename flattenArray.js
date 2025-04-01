//flatten an array of any depth
//Using recursion
function flattenArray (nestedArr, depth=Infinity ){
	//result  flat array
  let result = [];
  
  //A helper function to flatten the array recursively
  function flattenHelper(arr, currDepth){
  	for(let i=0;i<arr.length;i++){
    	let current;
      current = arr[i];
      //check if current element is an array and we havent reached 
      //the max depth
      if(Array.isArray(current) && currDepth<depth ){
      	flattenHelper(current, currDepth+1);
      }
      else{
      result.push(current);
      }
    }
  }
  
  //start flattening recursively from depth 0
  flattenHelper(nestedArr, 0);
  return result;
}

const nestedArray1 = [1, [2, 3], [4, [5, 6]]];
console.log("Fully flattened:", flattenArray(nestedArray1));

