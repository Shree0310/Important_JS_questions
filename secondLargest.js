const arr = [6, 2, 4, 7, 7, 5];

let secondLargest = (arr) =>{
	let largest = -Infinity;
  let secLargest = -Infinity;
  
  for(let i=0;i<arr.length; i++){
  	if(arr[i]>largest){
    secLargest = largest;
    	largest = arr[i];
    }
    else if(arr[i]>secLargest && arr[i] != largest){
    	secLargest = arr[i];
    }
  }
  return secLargest;
}

console.log(secondLargest(arr));
