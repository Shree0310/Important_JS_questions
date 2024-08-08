const arr = [6, 2, 4, 7, 7, 5];

let secondSmallest = (arr) =>{
 let small = Infinity;
 let secSmall = Infinity;
 
 for(let i=0;i<arr.length; i++){
 	if(arr[i]<small){
  	secSmall = small;
    small = arr[i];
  }
  else if(arr[i]< secSmall && arr[i] != small){
  	secSmall = arr[i];
  }
 }
 return secSmall;
}

console.log(secondSmallest(arr));
