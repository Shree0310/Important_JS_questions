//finding the transpose of a matrix
let array = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
];
    
var findTranspose = (arr) =>{
	let len = arr.length;
  for(let i=0;i<len;i++){
  	for(let j=0;j<i;j++){
    	let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}    
console.log(findTranspose(array));
