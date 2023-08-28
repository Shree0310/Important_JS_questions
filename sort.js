 //Sort an array of integers

//using while loop
let sortArr = function(arr){
	let n = arr.length;
  let temp ;
  let i=0;
  let j;
  while(i<n){
    j= i+1
  	while(j<n){
    	if(arr[j]<arr[i]){
      	temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
    i++;    
  } 
  return arr;
}

let arr = [8,7,3,9];
//console.log(sortArr(arr));
